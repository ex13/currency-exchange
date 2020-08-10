interface LRUCacheEntry<T> {
  value: T;
  timestamp: number;
}

/**
 * LRU Cache strategy model which uses ES6 Map functionality under the hood.
 */
export class LRUCacheModel<T> {
  private values: Map<string, LRUCacheEntry<T>> = new Map<
    string,
    LRUCacheEntry<T>
  >();
  private ttl: number;
  private capacity: number;

  constructor(ttl: number, capacity: number) {
    this.ttl = ttl;
    this.capacity = capacity;
  }

  public get(key: string): T {
    this.cleanupExpiredEntries();

    const hasKey = this.values.has(key);

    let entry: LRUCacheEntry<T>;
    if (hasKey) {
      entry = this.values.get(key);

      // Re-insert the value, so it's recorded as the last entry
      this.values.delete(key);
      this.values.set(key, { value: entry.value, timestamp: Date.now() });
    }

    if (!entry || !entry.value) {
      return;
    }

    return entry.value;
  }

  public set(key: string, value: T): void {
    this.cleanupExpiredEntries();

    if (this.values.size >= this.capacity) {
      // Deleting the least-recently used cache entry
      const keyToDelete = this.values.keys().next().value;
      this.values.delete(keyToDelete);
    }

    this.values.set(key, { value, timestamp: Date.now() });
  }

  private cleanupExpiredEntries(): void {
    this.values.forEach((value, key) => {
      if (Date.now() - value.timestamp >= this.ttl) {
        this.values.delete(key);
      }
    });
  }
}
