"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = ({ setUser, User, children }) => {
  const [Session, setSession] = useState({});
  const [active, setActive] = useState(0);

  console.log("Session", Session);

  const router = useRouter();

  const GetInfoBase = () => {
    if (localStorage?.InfoUsuario) {
      setSession({
        ...JSON.parse(localStorage?.InfoUsuario),
      });
    }
  };
  useEffect(() => {
    GetInfoBase();
  }, []);

  return (
    <>
      {Session.tipo == 1 ? (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
          <div className="border-r-2 border-r-white fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-[#070e54]  h-full text-white transition-all duration-300 z-10 sidebar">
            <div className="border-r-2 border-r-white flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-24 bg-[#070e54] ">
              <span className="w-8 my-2 h-8 md:w-16 md:h-16 mr-2 rounded-md cursor-pointer overflow-hidden">
                <Link href="/">
                  <Image
                    src={`/EscudoUniminuto.webp`}
                    width={200}
                    height={200}
                    alt="Inicio"
                    title="Escudo Uniminuto"
                  />
                </Link>
              </span>
              <p className="hidden md:block md:break-normal	">
                {Session?.nombre || ""} {Session?.apellidos || ""}
              </p>
            </div>
            <div className="scrollbar-hide overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li>
                  <Link href={`/Proyectos`}>
                    <div className=" cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
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
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Proyectos
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={`/Vendedores`}>
                    <div className=" cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
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
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Vendedores
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={`/Clientes`}>
                    <div className=" cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
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
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Clientes
                      </span>
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={`/Seguridad/EditUser/${Session?.DemasInfo?.Documento}/${Session?.DemasInfo?.Id}/${Session?.DemasInfo?.RolTipo}`}
                  >
                    <div className=" cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
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
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Editar Información
                      </span>
                    </div>
                  </Link>
                </li> */}
                <li>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      setUser(null);
                      // limpia el local storage
                      localStorage?.clear();
                      router.replace("/");
                    }}
                    className=" cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Cerrar Sesión
                    </span>
                  </div>
                </li>
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center  text-xs">
                <a href="" target="_blank" rel="noopener noreferrer">
                  Copyright @branding emocion S.A.S {new Date().getFullYear()} -{" "}
                  {new Date().getFullYear() + 1}
                </a>
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col ml-14 md:ml-64">{children}</div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
          no admin
          {children}
        </div>
      )}
    </>
  );
};

export default Header;
