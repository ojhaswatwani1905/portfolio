import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "Ojhas Watwani Portfolio",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
  });
}
