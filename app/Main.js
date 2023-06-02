"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import SingIn from "./SingIn";

const Main = ({ children }) => {
  const [User, setUser] = useState(null);
  const [ModalCambiosPass, setModalCambiosPass] = useState(false);

  useEffect(() => {
    if (User || localStorage?.usu_rol) {
      setUser(User || localStorage?.usu_rol);
    }
  }, [User]);
  return (
    <body>
      {User && (
        <>
          <Header
            setUser={setUser}
            User={User}
            ModalCambiosPass={ModalCambiosPass}
            setModalCambiosPass={setModalCambiosPass}
          >
            {children}
          </Header>
        </>
      )}

      {!User && (
        <SingIn setUser={setUser} setModalCambiosPass={setModalCambiosPass} />
      )}
    </body>
  );
};

export default Main;
