import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({message:"Its working with the next js we created the next api"},{status:200})
}

