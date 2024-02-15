import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = true;

export async function GET(request: NextRequest) {
    const token = await getToken({req: request});
    return NextResponse.json(token);
}