import { Repository } from '@/domain/base/Repository';
import { memoryCache } from '../cache';
import { v4 as uuidv4 } from 'uuid';

export class MemoryRepository<T extends { id: string }> implements Repository<T> {
  constructor(private readonly prefix: string) {}

  private getKey(id: string): string {
    return `${this.prefix}:${id}`;
  }

  private getAllKeys(): string[] {
    return memoryCache.keys().filter(key => key.startsWith(`${this.prefix}:`));
  }

  async findById(id: string): Promise<T | undefined> {
    const key = this.getKey(id);
    return memoryCache.get<T>(key);
  }

  async findAll(): Promise<T[]> {
    const keys = this.getAllKeys();
    const entities: T[] = [];
    for (const key of keys) {
      const entity = memoryCache.get<T>(key);
      if (entity) {
        entities.push(entity);
      }
    }
    return entities;
  }

  async create(entity: Omit<T, 'id'>): Promise<T> {
    const id = uuidv4();
    const newEntity = { ...entity, id } as T;
    const key = this.getKey(id);
    memoryCache.set(key, newEntity);
    return newEntity;
  }

  async update(id: string, entity: Partial<T>): Promise<T | undefined> {
    const existing = await this.findById(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...entity } as T;
    const key = this.getKey(id);
    memoryCache.set(key, updated);
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const key = this.getKey(id);
    return memoryCache.delete(key);
  }
}
