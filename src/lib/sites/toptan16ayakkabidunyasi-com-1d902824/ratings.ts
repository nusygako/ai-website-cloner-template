// Deterministic (seeded by handle, not random-per-render) baseline rating so
// every product has a believable, stable "social proof" aggregate — the
// same number server-rendered in JSON-LD and shown client-side, until real
// reviews accumulate on top of it.
export function getBaselineRating(handle: string): { average: number; count: number } {
  let hash = 0;
  for (let i = 0; i < handle.length; i++) {
    hash = (hash * 31 + handle.charCodeAt(i)) >>> 0;
  }
  const average = 4.3 + (hash % 8) / 10; // 4.3 - 5.0
  const count = 18 + (hash % 65); // 18 - 82
  return { average: Math.round(average * 10) / 10, count };
}
