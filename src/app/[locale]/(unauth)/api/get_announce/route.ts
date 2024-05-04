import { NextResponse } from 'next/server';

import { getAnnouncementContent } from '@/services';

export async function GET() {
  const data = await getAnnouncementContent();

  return NextResponse.json(data, { status: 200 });
}
