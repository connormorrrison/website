// src/app/blog/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Check if this is an RSC request
  const headersList = await headers();
  const isRSC = headersList.get('RSC') || headersList.get('Next-Router-State-Tree');
  
  // For RSC requests, return an empty response rather than redirecting
  if (isRSC) {
    return new NextResponse(null, { status: 200 });
  }
  
  // For normal browser requests, redirect to Substack
  return NextResponse.redirect('https://connormorrison.substack.com', {
    status: 301
  });
}