import { NextResponse } from 'next/server';
import { userService } from '@/infrastructure/factories/UserServiceFactory';
import { CreateUserDTO } from '@/domain/user/dto/CreateUserDTO';
import { UpdateUserDTO } from '@/domain/user/dto/UpdateUserDTO';

export async function GET() {
  const users = await userService.findAll();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const body: CreateUserDTO = await request.json();
    const user = await userService.create(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'Email already exists') {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...body }: { id: string } & UpdateUserDTO = await request.json();
    const user = await userService.update(id, body);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deleted = await userService.delete(id);
    if (!deleted) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
