// One source of truth for the product identity.
// The name came from a vote — it comes from one place in the code too.
export const PRODUCT_NAME = "{product}";
export const PITCH = "{pitch}";

// Read from .env (see .env.example). Falls back so a missing .env is a smaller
// problem than a crash on first run.
export const PAGE_SIZE = Number(import.meta.env.VITE_PAGE_SIZE ?? 20);
