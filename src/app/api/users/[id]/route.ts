import { NextResponse } from 'next/server';
import { userService } from '@/infrastructure/factories/UserServiceFactory';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await userService.findById(params.id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}
