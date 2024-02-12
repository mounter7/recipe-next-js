import connectMongoDB from '../../lib/config'
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { s } = reqBody;
    console.log(reqBody)
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
    const items = await res.json()
    return NextResponse.json({ items })
}
