import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { id } = await request.json();

    console.log("id", id);
    console.log(`DELETE FROM Proyectos WHERE id = ${id}`);
    const [Proyectos] = await connectionPool.query(`
    DELETE FROM Proyectos WHERE id = '${id}'
    `);
    if (Proyectos.affectedRows == 0) {
      return NextResponse.json(
        { body: "El proyecto no se pudo eliminar" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { body: "El proyecto se eliminó con éxitoo" },
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
