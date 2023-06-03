import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, nombre, descripcion } = await req?.json();
    if (id) {
      console.log("voy a editar");
      const [proyectos] = await connectionPool.query(
        `UPDATE  Proyectos set nombre='${nombre}', description='${descripcion}' WHERE id='${id}'`
      );

      return NextResponse.json(
        { body: "Proyecto editado con éxito" },
        {
          status: 200,
        }
      );
    }
    const [proyectos] = await connectionPool.query(
      `INSERT INTO Proyectos (nombre, description) VALUES ( '${nombre}', '${descripcion}')`
    );

    return NextResponse.json(
      { body: "Proyecto agregado con éxito" },
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
