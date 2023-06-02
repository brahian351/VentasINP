import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const Usuario = searchParams?.get("Usuario");
    const Pass = searchParams?.get("Pass");

    if (!Usuario?.length || !Pass?.length) {
      console.log("entro");
      return NextResponse.json(
        { body: "Usiario o Contraseña vacios" },
        { status: 401 }
      );
    }

    const [user] = await connectionPool.query(
      `SELECT * FROM usuarios WHERE nickname = '${Usuario}' AND password = '${Pass}'`
    );

    if (user.length > 0) {
      return NextResponse.json({ body: user[0] || {} }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Internal Server Error" },
      { status: 500 }
    );
  }
}
