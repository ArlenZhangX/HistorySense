export interface Repository<T> {
  findById(id: string): Promise<T | undefined>;
  findAll(): Promise<T[]>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T | undefined>;
  delete(id: string): Promise<boolean>;
}
