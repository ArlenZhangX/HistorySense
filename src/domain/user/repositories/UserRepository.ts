import { Repository } from '@/domain/base/Repository';
import { User } from '../entities/User';

export interface UserRepository extends Repository<User> {
  findByEmail(email: string): Promise<User | undefined>;
}
