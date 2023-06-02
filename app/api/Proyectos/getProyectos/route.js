import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  try {
    const [proyectos] = await connectionPool.query(`SELECT * FROM clientes`);

    return NextResponse.json(
      { proyectos: proyectos || [] },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { body: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
