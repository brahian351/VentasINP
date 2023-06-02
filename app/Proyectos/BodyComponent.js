"use client";
import React, { useEffect, useState } from "react";
import TableProyectos from "./TableProyectos";
import TitleButton from "../TitleButton";
import Modal from "./Modal";
import Loading from "../loading";

const BodyComponent = () => {
  const [Proyectos, setProyectos] = useState([]);
  const [LoadingData, setLoadingData] = useState(null);
  const [InfoModal, setInfoModal] = useState({
    visible: false,
    InfoEditar: {},
  });
  const getData = async () => {
    setLoadingData(true);
    const res = await fetch(`/api/Proyectos/getProyectos`);
    const data = await res.json();

    setProyectos(data?.proyectos || []);
    setLoadingData(false);
    console.log("data", data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {InfoModal.visible && (
        <Modal
          InfoModal={InfoModal}
          setInfoModal={setInfoModal}
          getData={getData}
        />
      )}
      <TitleButton title="Proyectos">
        <div>
          <button
            autoFocus
            onClick={() => {
              setInfoModal({
                visible: true,
                InfoEditar: {},
              });
            }}
            className="BtnHeader hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 "
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Agregar proyecto</span>
          </button>
        </div>
      </TitleButton>

      {LoadingData ? (
        <Loading />
      ) : (
        <TableProyectos info={Proyectos} setInfoModal={setInfoModal} />
      )}
    </div>
  );
};

export default BodyComponent;
