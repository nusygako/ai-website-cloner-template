"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface Address {
  id: string;
  title: string;
  fullName: string;
  phone: string;
  city: string;
  district: string;
  addressLine: string;
}

export interface AccountUser {
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

interface StoredUser extends AccountUser {
  password: string;
}

type Result = { ok: true } | { ok: false; error: string };

interface AccountContextValue {
  user: AccountUser | null;
  hydrated: boolean;
  register: (name: string, email: string, password: string) => Result;
  login: (email: string, password: string) => Result;
  logout: () => void;
  updateProfile: (name: string, phone: string) => void;
  addAddress: (address: Omit<Address, "id">) => void;
  updateAddress: (id: string, address: Omit<Address, "id">) => void;
  deleteAddress: (id: string) => void;
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

function toSession(stored: StoredUser): AccountUser {
  const session: AccountUser = {
    name: stored.name,
    email: stored.email,
    phone: stored.phone,
    addresses: stored.addresses,
  };
  return session;
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

  function persist(session: AccountUser) {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    const users = readUsers();
    writeUsers(
      users.map((u) =>
        u.email === session.email ? { ...u, ...session } : u,
      ),
    );
  }

  function register(name: string, email: string, password: string): Result {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    if (users.some((u) => u.email === normalizedEmail)) {
      return { ok: false, error: "Bu e-posta ile zaten bir hesap var." };
    }
    const newUser: StoredUser = {
      name: name.trim(),
      email: normalizedEmail,
      password,
      phone: "",
      addresses: [],
    };
    writeUsers([...users, newUser]);
    const session = toSession(newUser);
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  }

  function login(email: string, password: string): Result {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const found = users.find(
      (u) => u.email === normalizedEmail && u.password === password,
    );
    if (!found) {
      return { ok: false, error: "E-posta veya şifre hatalı." };
    }
    const session = toSession(found);
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  }

  function logout() {
    window.localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  function updateProfile(name: string, phone: string) {
    if (!user) return;
    persist({ ...user, name: name.trim(), phone: phone.trim() });
  }

  function addAddress(address: Omit<Address, "id">) {
    if (!user) return;
    const newAddress: Address = { ...address, id: crypto.randomUUID() };
    persist({ ...user, addresses: [...user.addresses, newAddress] });
  }

  function updateAddress(id: string, address: Omit<Address, "id">) {
    if (!user) return;
    persist({
      ...user,
      addresses: user.addresses.map((a) =>
        a.id === id ? { ...address, id } : a,
      ),
    });
  }

  function deleteAddress(id: string) {
    if (!user) return;
    persist({
      ...user,
      addresses: user.addresses.filter((a) => a.id !== id),
    });
  }

  return (
    <AccountContext.Provider
      value={{
        user,
        hydrated,
        register,
        login,
        logout,
        updateProfile,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within an AccountProvider");
  return ctx;
}
