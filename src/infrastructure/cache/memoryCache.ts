type CacheItem<T> = {
  value: T;
  expiresAt?: number;
};

class MemoryCache {
  private store: Map<string, CacheItem<unknown>> = new Map();
  private cleanupInterval: ReturnType<typeof setInterval>;

  constructor() {
    this.cleanupInterval = setInterval(() => this.cleanupExpired(), 60000);
  }

  get<T>(key: string): T | undefined {
    const item = this.store.get(key);
    if (!item) return undefined;
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return item.value as T;
  }

  set<T>(key: string, value: T, ttlMs?: number): void {
    const item: CacheItem<T> = { value };
    if (ttlMs) {
      item.expiresAt = Date.now() + ttlMs;
    }
    this.store.set(key, item);
  }

  delete(key: string): boolean {
    return this.store.delete(key);
  }

  has(key: string): boolean {
    const item = this.store.get(key);
    if (!item) return false;
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return false;
    }
    return true;
  }

  keys(): string[] {
    const keys: string[] = [];
    for (const key of this.store.keys()) {
      if (this.has(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  clear(): void {
    this.store.clear();
  }

  size(): number {
    return this.store.size;
  }

  private cleanupExpired(): void {
    const now = Date.now();
    for (const [key, item] of this.store) {
      if (item.expiresAt && now > item.expiresAt) {
        this.store.delete(key);
      }
    }
  }

  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.store.clear();
  }
}

export const memoryCache = new MemoryCache();
