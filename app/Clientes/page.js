import React from 'react'

function index() {
    return (
        <>
            <div className="bg-black/60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
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
                                            <input type="checkbox" name="option" id="8" className="peer hidden" />
                                            <label
                                                for="8"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >Paseo de las Aguas</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="option" id="2" className="peer hidden" />
                                            <label
                                                for="2"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >El Carmen de Covicorti</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="option" id="3" className="peer hidden" />
                                            <label
                                                for="3"
                                                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                            >Liverpool</label>
                                        </div>
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

export default index