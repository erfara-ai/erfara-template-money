/** One row of the thing this product is about. */
export interface Goal {
  id: string;
  title: string;
  /** target. The number this product is organised around. */
  targetCents: number;
  /** Stored raw, shown in saved — see lib/format. */
  savedCents: number;
  category: string;
  tags: string[];
}

export interface Page<T> {
  items: T[];
  total: number;
}
