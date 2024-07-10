import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { TokenRequestType } from "@/utils/type/request"


export const GET = async () => {
    try {
        const token = cookies().get('token')

        return NextResponse.json({ message: "successfully get the cookie", token: token })
    } catch (error) {
        return NextResponse.json({ message: "error: Failed to get the cookie" })
    }
}

export const POST = async (request: Request) => {
    try {
        const { token }: TokenRequestType = await request.json()
        cookies().set('token', token, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, //for 1 week the session will remains alive
        })

        return NextResponse.json({ message: "successfully set the cookie" })
    } catch (error) {
        return NextResponse.json({ message: "error: Failed to set the cookie" })
    }
}


export const DELETE = async () => {
    try {
        const token = cookies().delete("token")

        return NextResponse.json({ message: "successfully get the cookie", token: token })
    } catch (error) {
        return NextResponse.json({ message: "error: Failed to get the cookie" })
    }
}