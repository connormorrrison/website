// src/app/blog/route.ts
import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.redirect(
    "https://connormorrison.substack.com",
    301
  )
}
