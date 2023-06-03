import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { id } = await request.json();

    const [deleteVentedor] = await connectionPool.query(`
    DELETE FROM Vendedores WHERE id = '${id}'
    `);
    if (deleteVentedor.affectedRows == 0) {
      return NextResponse.json(
        { body: "El Vendedor no se pudo eliminar" },
        {
          status: 400,
        }
      );
    }

    const [deleteUser] = await connectionPool.query(`
    DELETE FROM usuarios WHERE idVendedor = '${id}'
    `);

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
