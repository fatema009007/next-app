import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('middle wareee');
    return NextResponse.redirect(new URL('/about-2', request.url))
}
