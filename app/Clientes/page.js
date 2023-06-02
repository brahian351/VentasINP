"use client"
import axios from 'axios';
import React, { useState } from 'react'

function Index() {
    const [datos, setData] = useState({})
    const [proyectos, setProyecto] = useState([]);
    const changeData = (e) => {
        const { value, name } = e.target
        setData({
            ...datos,
            [name]: value
        })
    }
    const changeProyect = (e) => {
        const { checked, value } = e.target
        if (checked) {
            const newArray = [...proyectos]
            newArray.push(value)
            setProyecto(newArray)
        } else {
            const newArray = proyectos.filter((e) => e != value)
            setProyecto(newArray)
        }
    }
    const handleSave = async (e) => {
        e.preventDefault()
        if (!datos?.Nombre) {
            alert("Debe ingresar el nombre del cliente")
            return false
        }
        if (!datos?.Apellidos) {
            alert("Debe ingresar el apellido del cliente")
            return false
        }
        if (!datos?.Identificacion) {
            alert("Debe ingresar el N° de identificación")
            return false
        }
        if (!datos?.Correo) {
            alert("Debe ingresar el correo del cliente")
            return false
        }
        if (!datos?.Celular) {
            alert("Debe ingresar el celular del cliente")
            return false
        }
        if (!datos?.Direccion) {
            alert("Debe ingresar la dirección del cliente")
            return false
        }
        if (!proyectos.length) {
            alert("Debe seleccionar un proyecto")
            return false
        }
        console.log("todo bien")
        await axios("/api/Cliente/Registro", {
            params: {
                ...datos,
                proyecto: proyectos
            }
        }).then((res) => {
            console.log(res)
            if (res.status == 200) {
                alert("Cliente registrado con exito")
            }
        }).catch((error) => {
            console.log(error)
            alert("Error al intentar registrar el cliente, favor comunicarse con soporte")
        })
    }
    return (
        <>
            <div className=" bg-black/60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-2xl">
                    <div className="transition duration-150 ease-in-out z-20 fixed top-0 right-0 bottom-0 left-0">
                        <div className="container mx-auto h-screen overflow-auto w-11/12 md:w-full max-w-6xl">
                            <div className="pt-2 pb-2    px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                <h1 className="text-white bg-[#151A8B] text-center font-lg font-bold tracking-normal leading-tight mb-4 p-4 rounded-lg">
                                    DATOS DEL CLIENTE
                                </h1>
                                <form>
                                    {/* FILA 1 */}
                                    <div className="grid gap-4 mb-6 lg:grid-cols-3">
                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Nombres
                                            </label>
                                            <input
                                                name='Nombre'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Apellidos
                                            </label>
                                            <input
                                                name='Apellidos'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                N° Identificación
                                            </label>
                                            <input
                                                name='Identificacion'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    {/* FILA 2 */}
                                    <div className="grid gap-4 mb-6 lg:grid-cols-3">
                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Correo Electrónico
                                            </label>
                                            <input
                                                name='Correo'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Teléfono
                                            </label>
                                            <input
                                                name='Telefono'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Celular
                                            </label>
                                            <input
                                                name='Celular'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    {/* FILA 3 */}
                                    <div className="grid gap-4 mb-6 lg:grid-cols-3">
                                        <div>
                                            <label className="block text-sm font-edium text-gray-900">
                                                Dirección
                                            </label>
                                            <input
                                                name='Direccion'
                                                onChange={(e) => { changeData(e) }}
                                                autoComplete="off"
                                                className="w-full p-[0.5rem] bg-gray-200 mt-2 rounded border-2 border-slate-200"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    {/* FILA 4 */}
                                    <div className='w-full p-2 text-center'>
                                        <h1 className='text-xl font-bold'>Proyecto del cual esta interesado</h1>
                                    </div>
                                    <div className="grid w-full justify-center grid-cols-3 space-x-2 rounded-xl bg-gray-200 p-2">
                                        <div>
                                            <input type="checkbox" name="option" id="1" className="peer hidden" onChange={(e) => changeProyect(e)} value="1" />
                                            <label
                                                htmlFor="1"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >Paseo de las Aguas</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="option" id="2" className="peer hidden" onChange={(e) => changeProyect(e)} value="2" />
                                            <label
                                                htmlFor="2"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >El Carmen de Covicorti</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="option" id="3" className="peer hidden" onChange={(e) => changeProyect(e)} value="3" />
                                            <label
                                                htmlFor="3"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >Liverpool</label>
                                        </div>
                                    </div>
                                    <div className='justify-between justify-items-center grid grid-cols-2 p-4'>
                                        <button className='p-2 w-2/5 bg-green-600 text-white font-bold rounded-md' onClick={(e) => { handleSave(e) }}>Guardar</button>
                                        <button className='p-2 w-2/5 bg-cyan-600 text-white font-bold rounded-md'>Cerrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Index