import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  try {
    const Nombre = searchParams?.get("Nombre");
    const Apellidos = searchParams?.get("Apellidos");
    const Identificacion = searchParams?.get("Identificacion");
    const Correo = searchParams?.get("Correo");
    const Telefono = searchParams?.get("Telefono");
    const Celular = searchParams?.get("Celular");
    const Direccion = searchParams?.get("Direccion");
    const proyecto = searchParams?.get("proyecto");
    const fecha = new Date();
    const ahora = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1 > 9
        ? fecha.getMonth() + 1
        : `0${fecha.getMonth() + 1}-${
            fecha.getDate() > 9 ? fecha.getDate() : `0${fecha.getDate()}`
          }`
    }`;
    const [cliente] = await connectionPool.query(
      `SELECT * FROM clientes WHERE dni = ${Identificacion}`
    );
    console.log("Este es el cliente ", cliente);

    if (!cliente.length) {
      await connectionPool.query(
        `INSERT INTO clientes(fecharegistro,nombres,apellidos,dni,email,telefono,celular,direccion) VALUES('${ahora}','${Nombre}','${Apellidos}','${Identificacion}','${
          Correo || "noregistra@correo.com"
        }', '${Telefono || 0}', '${Celular}', '${Direccion}')`
      );
    } else {
      return NextResponse.json(
        { body: "El usuario ya se encuentra registrado" },
        { status: 500 }
      );
    }

    return NextResponse.json({ body: "todo bien" }, { status: 200 });
  } catch (error) {
    console.log("Este es el error ", error);
    return NextResponse.json(
      {
        body: "Existe un error al guardar al cliente, favor comunicarse con soporte",
      },
      { status: 500 }
    );
  }
}
