import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, nombre, apellidos, celular, correo, direccion } =
      await req?.json();
    if (id) {
      console.log("voy a editar");
      const [UpdateVendedor] = await connectionPool.query(
        `UPDATE  Vendedores set nombre='${nombre || ""}', apellidos='${
          apellidos || ""
        }', celular='${celular || ""}', correo='${correo || ""}', direccion='${
          direccion || ""
        }' WHERE id='${id}'`
      );

      return NextResponse.json(
        { body: "Vendedor editado con éxito" },
        {
          status: 200,
        }
      );
    }
    const [AddVendedor] = await connectionPool.query(
      `INSERT INTO Vendedores (nombre, apellidos,celular,correo,direccion) VALUES ( '${
        nombre || ""
      }', '${apellidos || ""}', '${celular || ""}', '${correo || ""}', '${
        direccion || ""
      }')`
    );

    return NextResponse.json(
      { body: "Vendedor agregado con éxito" },
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
