"use client";
import axios from "axios";
import React from "react";

const SingIn = ({ setUser, setModalCambiosPass }) => {
  const [InputValues, setInputValues] = React.useState({});

  const hanlerSubimit = async (e) => {
    try {
      e.preventDefault();

      localStorage.clear();

      const response = await axios("/api/Login", {
        params: {
          ...InputValues,
        },
      });

      console.log(response);

      if (response?.status == 200) {
        localStorage.setItem(
          "InfoUsuario",
          JSON.stringify(response?.data?.body || {})
        );

        setUser({
          ...response?.data.body,
        });
      }
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.body || "");
    }
  };
  return (
    <main className="bg-white ">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: "url(/Bg.webp)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900/70">
            <div>
              <h2 className="text-4xl font-bold text-white">
                ¡Bienvenido a VentasINP
              </h2>
              <p className="max-w-xl mt-3 text-white font-bold">
                Es un placer tenerte aquí. Nuestra aplicación está diseñada para
                facilitar tus tareas en la administración de clientes de manera
                eficiente.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 ">
                Ingreso de Sesión{" "}
              </h2>
              <p className="mt-3 text-gray-500 ">
                Inicia sesión para acceder a tu cuenta{" "}
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={hanlerSubimit}>
                <div>
                  <label
                    htmlFor="Usuario"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Usuario
                  </label>
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      setInputValues({
                        ...InputValues,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type="text"
                    name="Usuario"
                    id="Usuario"
                    placeholder="Ingresa tu Usuario"
                    className="InputStyle"
                    autoFocus
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="Pass" className="text-sm text-gray-600 ">
                      Contraseña
                    </label>
                  </div>
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      setInputValues({
                        ...InputValues,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type="password"
                    name="Pass"
                    id="Pass"
                    placeholder="Tu Contraseña"
                    className="InputStyle"
                  />
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Ingresar{" "}
                  </button>
                </div>
              </form>
              {/* <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="#"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </a>
                  .
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingIn;
