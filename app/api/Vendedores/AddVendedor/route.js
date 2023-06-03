import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      id,
      nombre,
      apellidos,
      celular,
      correo,
      direccion,
      nickname,
      password,
    } = await req?.json();
    if (id) {
      console.log("voy a editar");
      const [UpdateVendedor] = await connectionPool.query(
        `UPDATE  Vendedores set nombre='${
          nombre.toLowerCase() || ""
        }', apellidos='${apellidos.toLowerCase() || ""}', celular='${
          celular || ""
        }', correo='${correo || ""}', direccion='${
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

    const [ExistenciaVendedor] = await connectionPool.query(
      `select id from Vendedores where nombre ='${nombre.toLowerCase()}' and apellidos ='${apellidos.toLowerCase()}'`
    );

    console.log(
      `select id from Vendedores where nombre ='${nombre.toLowerCase()}' and apellidos ='${apellidos.toLowerCase()}'`
    );

    if (ExistenciaVendedor.length > 0) {
      return NextResponse.json(
        { body: "El Vendedor ya se encuentra registrado" },
        {
          status: 401,
        }
      );
    }

    const [AddVendedor] = await connectionPool.query(
      `INSERT INTO Vendedores (nombre, apellidos,celular,correo,direccion) VALUES ( '${
        nombre.toLowerCase() || ""
      }', '${apellidos?.toLowerCase() || ""}', '${celular || ""}', '${
        correo || ""
      }', '${direccion || ""}')`
    );

    const [AddUsuario] = await connectionPool.query(
      `INSERT INTO usuarios (idVendedor, nickname,password,tipo,activo,fecharegistro) VALUES ('${AddVendedor.insertId}','${nickname}','${password}',2,1,CURDATE())`
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
