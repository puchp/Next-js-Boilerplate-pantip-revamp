import { NextResponse } from 'next/server';

import { getHighlightContent } from '@/services';

export async function GET() {
  const data = await getHighlightContent();

  return NextResponse.json(data, { status: 200 });
}
