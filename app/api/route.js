import { NextResponse } from "next/server";

export async function GET(req){

    return NextResponse.json({ time: new Date().toLocaleString() });
}

//mongodb+srv://mhkmhasankhan:<db_password>@cluster0.zztnr7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0