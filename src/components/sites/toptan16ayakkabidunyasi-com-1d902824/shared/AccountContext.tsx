"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface AccountUser {
  name: string;
  email: string;
}

interface StoredUser extends AccountUser {
  password: string;
}

interface AccountContextValue {
  user: AccountUser | null;
  hydrated: boolean;
  register: (
    name: string,
    email: string,
    password: string,
  ) => { ok: true } | { ok: false; error: string };
  login: (
    email: string,
    password: string,
  ) => { ok: true } | { ok: false; error: string };
  logout: () => void;
}

const USERS_KEY = "showroom-ayakkabi-users";
const SESSION_KEY = "showroom-ayakkabi-session";

const AccountContext = createContext<AccountContextValue | null>(null);

function readUsers(): StoredUser[] {
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AccountUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(SESSION_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
      if (raw) setUser(JSON.parse(raw) as AccountUser);
    } catch {
      // Ignore corrupt/unavailable storage; start signed out.
    }
    setHydrated(true);
  }, []);

  function register(name: string, email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    if (users.some((u) => u.email === normalizedEmail)) {
      return { ok: false as const, error: "Bu e-posta ile zaten bir hesap var." };
    }
    const newUser: StoredUser = { name: name.trim(), email: normalizedEmail, password };
    writeUsers([...users, newUser]);
    const session: AccountUser = { name: newUser.name, email: newUser.email };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true as const };
  }

  function login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const found = users.find(
      (u) => u.email === normalizedEmail && u.password === password,
    );
    if (!found) {
      return { ok: false as const, error: "E-posta veya şifre hatalı." };
    }
    const session: AccountUser = { name: found.name, email: found.email };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true as const };
  }

  function logout() {
    window.localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AccountContext.Provider value={{ user, hydrated, register, login, logout }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within an AccountProvider");
  return ctx;
}
