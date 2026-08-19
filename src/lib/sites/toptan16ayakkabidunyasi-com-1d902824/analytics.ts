"use client";

// Thin e-commerce event layer. Every call is logged to the console for now;
// swap the body of trackEvent for a GTM/dataLayer.push(...) call (or a
// direct Meta Pixel / GA4 gtag call) once a tag manager is wired up — call
// sites elsewhere in the app don't need to change.

export type EcommerceEvent =
  | "view_item"
  | "add_to_cart"
  | "remove_from_cart"
  | "begin_checkout"
  | "purchase";

export interface EcommerceEventData {
  currency?: string;
  value?: number;
  items?: Array<{
    item_id: string;
    item_name: string;
    price?: number;
    quantity?: number;
  }>;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: EcommerceEvent, data: EcommerceEventData = {}) {
  const payload = { event: eventName, ...data };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
  }

  console.log("[trackEvent]", payload);
}
