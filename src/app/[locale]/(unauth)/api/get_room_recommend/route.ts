import { NextResponse } from 'next/server';

import { getRoomRecommendContent } from '@/services';

export async function GET() {
  const data = await getRoomRecommendContent();

  return NextResponse.json(data, { status: 200 });
}
