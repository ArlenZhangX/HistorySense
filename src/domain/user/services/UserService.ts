import { User } from '../entities/User';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findByEmail(email);
  }

  async create(dto: CreateUserDTO): Promise<User> {
    const existing = await this.userRepository.findByEmail(dto.email);
    if (existing) {
      throw new Error('Email already exists');
    }
    const now = new Date();
    return this.userRepository.create({
      ...dto,
      createdAt: now,
      updatedAt: now,
    });
  }

  async update(id: string, dto: UpdateUserDTO): Promise<User | undefined> {
    return this.userRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });
  }

  async delete(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
