import { UserService } from '@/domain/user/services/UserService';
import { UserMemoryRepository } from '../repositories/UserMemoryRepository';

const userRepository = new UserMemoryRepository();

export const userService = new UserService(userRepository);
