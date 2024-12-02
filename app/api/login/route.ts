import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  try {
    return NextResponse.json(request.body)
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}