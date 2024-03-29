"use client";
import DataTable from "react-data-table-component";
import React, { useMemo, useState } from "react";
import { customStyles } from "@/lib/CustomStylesTables";

const TableVendedores = ({ info, setInfoModal, setProyectos }) => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = info?.filter((item) => {
    let nombre = `${item?.nombre?.toLowerCase()} ${item?.apellido?.toLowerCase()}`;

    return (
      nombre &&
      nombre
        .toString()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
  });
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      wrap: true,
      maxWidth: "150px",
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      wrap: true,
    },

    {
      name: "Apellidos",
      selector: (row) => row.apellidos,
      sortable: true,
      wrap: true,
    },
    {
      name: "Celular",
      selector: (row) => row.celular,
      sortable: true,
      wrap: true,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
      sortable: true,
      wrap: true,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion,
      sortable: true,
      wrap: true,
    },
    {
      name: "Operaciones",
      selector: (row) => (
        <div className="flex flex-wrap justify-center items-center text-red-900">
          <button
            title="Eliminar Registro"
            onClick={async () => {
              const validate = confirm(
                "¿Está seguro de eliminar este vendedor?"
              );
              if (validate) {
                // fecha de eliminación
                try {
                  console.log(row.id);
                  const responseRemove = await fetch(
                    "/api/Vendedores/DeleteVendedor",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        id: row.id,
                      }),
                    }
                  ).then((res) => res.json());

                  setProyectos((prev) =>
                    prev.filter((item) => item.id != row.id)
                  );

                  alert(`${responseRemove.body}`);
                } catch (error) {
                  console.error(error);
                  alert("Error al eliminar");
                }

                // alert("Eliminado");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <button
            title="Editar Registro"
            onClick={(e) => {
              e.preventDefault();

              setInfoModal({
                visible: true,
                InfoEditar: { ...row },
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0D7D1E"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
      ),
      sortable: true,
      wrap: true,
      maxWidth: "115px",
    },
  ];
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <input
        onChange={(e) => setFilterText(e.target.value)}
        // onClear={handleClear}
        value={filterText}
        autoComplete="off"
        placeholder="Buscar por Nombres y Apellidos o Documento"
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />
    );
  }, [filterText]);

  return (
    <>
      <div className="border-t-2 border-t-white">
        <DataTable
          title="Lista de Vendedores"
          columns={columns}
          paginationComponentOptions={paginationComponentOptions}
          data={filteredItems}
          pagination
          persistTableHead
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          responsive
          noDataComponent="No hay vendedores registrados"
          customStyles={customStyles}
          paginationPerPage={7}
        />
      </div>
    </>
  );
};

export default TableVendedores;
