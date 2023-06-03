import axios from "axios";
import React, { useState } from "react";

const Modal = ({ InfoModal, setInfoModal, getData }) => {
  const [InputValues, setInputValues] = useState({
    nombre: InfoModal?.InfoEditar?.nombre || "",
    descripcion: InfoModal?.InfoEditar?.descripcion || "",
  });

  console.log("InfoModal", InfoModal);

  const handerSubmit = async (e) => {
    try {
      e.preventDefault();

      const ResSendData = await axios.post("/api/Proyectos/AddProyecto", {
        ...InputValues,
        id: InfoModal?.InfoEditar?.id || null,
      });

      console.log("ResSendData", ResSendData);
      getData();

      alert(ResSendData?.data?.body);
      setInfoModal({
        visible: false,
        InfoEditar: {},
      });
    } catch (error) {
      console.log(error);
      alert(error?.data?.config?.body);
    }
  };

  const hanlerChange = (e) => {
    e.preventDefault();
    setInputValues({
      ...InputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-[#000236]/60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-2xl">
        <div className="relative overflow-auto  max-h-screen  py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-center text-lg tracking-normal leading-tight mb-4 bg-[#151A8B] w-full text-white p-4 rounded-lg font-bold ">
            {Object.keys(InfoModal?.InfoEditar).length > 0
              ? `Editar ${InfoModal.InfoEditar?.nombre}`
              : "Agregar un proyecto"}
          </h1>

          <form onSubmit={handerSubmit}>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="mb-2">
                <label
                  htmlFor="nombre"
                  className="mb-3 block text-base font-medium text-gray-800"
                >
                  Nombre proyecto <span className="text-red-900">(*)</span>
                </label>
                <input
                  autoComplete="off"
                  autoFocus
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  onChange={hanlerChange}
                  placeholder="Ingrese Nombre del proyecto"
                  className="InputStyle"
                  defaultValue={InfoModal.InfoEditar?.nombre}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="descripcion"
                  className="mb-3 block text-base font-medium text-gray-800"
                >
                  Descripción
                </label>
                <textarea
                  autoComplete="off"
                  rows="4"
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  onChange={hanlerChange}
                  placeholder="Ingrese Descriptión"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  defaultValue={InfoModal.InfoEditar?.description}
                  // validar en el input de tipo text que tenga una longitud maxima de 4 caracteres y solo letras
                  // title="Solo se permiten letras y una longitud maxima de 4 caracteres"
                />
              </div>
            </div>

            <div className="flex justify-around mt-3 gap-2">
              <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                {Object.keys(InfoModal.InfoEditar)?.length > 0
                  ? "Editar"
                  : "Guardar"}
              </button>
              <button
                className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  setInfoModal({
                    visible: false,
                    InfoEditar: {},
                  });
                }}
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
