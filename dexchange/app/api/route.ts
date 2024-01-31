import { createClient } from 'redis';
import { NextResponse } from "next/server";

export async function GET() {
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
    
    const data = await client.get("checkdemocheck")
    // await client.disconnect();
    return NextResponse.json({message:"Redis is connected with the next application!","response":JSON.parse(data!)}, {status:200})
}

export async function POST (request:Request) {
    
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    const data = await request.json();
    const shrey = client.set("checkdemocheck", JSON.stringify(data));
    
    return NextResponse.json({message:shrey},{status:200})
    // await client.disconnect();
    
}