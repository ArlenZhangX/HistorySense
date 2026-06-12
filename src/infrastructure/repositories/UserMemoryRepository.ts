import { User } from '@/domain/user/entities/User';
import { UserRepository } from '@/domain/user/repositories/UserRepository';
import { MemoryRepository } from './MemoryRepository';

export class UserMemoryRepository extends MemoryRepository<User> implements UserRepository {
  constructor() {
    super('user');
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const users = await this.findAll();
    return users.find(user => user.email === email);
  }
}
