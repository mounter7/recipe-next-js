import connectMongoDB from '../../lib/config'
import { UserModel } from "../../models/userModel"
import { NextResponse } from "next/server"

export async function GET() {
    await connectMongoDB()
    const users = await UserModel.find()
    return NextResponse.json({ users })
}
