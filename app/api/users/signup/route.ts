import connectMongoDB from '../../../lib/config'
import { UserModel } from "../../../models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB()
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        //check if user already exists
        const user = await UserModel.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}