"use client"
import { customStyles } from '@/lib/CustomStylesTables'
import React from 'react'
import DataTable from 'react-data-table-component'

function TableClientes({ info }) {
    const columns = [
        {
            name: "Nombre apellido",
            wrap: true,
            selector: row => <span className='capitalize'>{row.nombres} {row.apellidos}</span>,
            sortable: true,
        },
        {
            name: "Celular",
            selector: row => row.celular
        },
        {
            name: "Correo",
            selector: row => row.email
        },
        {
            name: "Dirección",
            selector: row => row.direccion
        },
        {
            name: "Vendedor Asignado",
            selector: row => row.vendedor ? row.vendedor : <button className='bg-cyan-500 font-bold text-white p-2 rounded-md'>Asignar Vendedor</button>,
            wrap: true,
        },
        {
            name: "Donde fue contactado",
            selector: row => row.lugar_contacto ? row.lugar_contacto : <button className='bg-cyan-500 font-bold text-white p-2 rounded-md'>Asignar</button>,
            wrap: true,
        },
        {
            name: "Observaciones",
            selector: row => row.detalles ? <button className='bg-cyan-500 font-bold text-white p-2 rounded-md'>Observaciones</button> : "No existen observaciones",
            wrap: true
        }
    ]
    const paginationComponentOptions = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };
    return (
        <>
            <div className="border-t-2 border-t-white">
                <DataTable
                    title="Lista de Clientes"
                    columns={columns}
                    data={info}
                    paginationComponentOptions={paginationComponentOptions}
                    persistTableHead
                    pagination
                    responsive
                    noDataComponent="No hay Clientes agregados"
                    paginationPerPage={7}
                    customStyles={customStyles}
                />
            </div>
        </>
    )
}

export default TableClientes