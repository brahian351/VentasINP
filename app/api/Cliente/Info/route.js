import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    try {
        const [dataClient] = await connectionPool.query(`SELECT * FROM clientes`);
        return NextResponse.json({ dataClient }, { status: 200 })
    } catch (error) {
        console.log("Error al consultar la información del cliente ", error)
        return NextResponse.json("Error al consultar la información del cliente", { status: 500 })
    }
}