import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { id } = await request.json();

    const [Proyectos] = await connectionPool.query(`
    DELETE FROM Vendedores WHERE id = '${id}'
    `);
    if (Proyectos.affectedRows == 0) {
      return NextResponse.json(
        { body: "El Vendedor no se pudo eliminar" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { body: "El Vendedor se eliminó con éxito" },
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
