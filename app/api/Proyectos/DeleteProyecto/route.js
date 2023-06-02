import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    // const { TipoModulo, ModuloPrincipal, Nombre, NombreModuloPrincipal } =
    //   await req?.json();

    const { id } = await req?.json();

    const [AdministrativoDelete] = await connectionPool.query(`
    DELETE FROM admco WHERE id = ${id}
    `);
    if (AdministrativoDelete.affectedRows === 0) {
      return NextResponse.json(
        { body: "El proyecto se eliminó con éxito" },
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
