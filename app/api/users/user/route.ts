import { getDataFromToken } from "../../../helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from '../../../lib/config'
import { UserModel } from "../../../models/userModel"

export async function GET(request:NextRequest){

    try {
        await connectMongoDB()
        const userId = await getDataFromToken(request);
        const user = await UserModel.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}