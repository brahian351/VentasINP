"use client"
import React, { useEffect, useState } from 'react'
import TitleButton from '../TitleButton'
import Add from './Add';
import axios from 'axios';
import Loading from '../loading';
import TableClientes from './TableClientes';

function BodyComponent() {
    const [InfoModal, setInfoModal] = useState({ visible: false });
    const [LoadingData, setLoadingData] = useState(null);
    const [data, setData] = useState({})

    const getData = async () => {
        setLoadingData(true);
        await axios("/api/Cliente/Info").then((result) => {
            setLoadingData(false);
            setData(result.data)
        }).catch((error) => {
            alert("Error al consultar la información sobre los clientes");
        })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {InfoModal.visible && <Add open={setInfoModal} />}
            <TitleButton title="Clientes">
                <div>
                    <button
                        autoFocus
                        onClick={() => {
                            setInfoModal({
                                visible: true,
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

                        <span>Agregar Cliente</span>
                    </button>
                </div>
            </TitleButton>
            {LoadingData ? (
                <Loading />
            ) : (
                <TableClientes
                    info={data?.dataClient}
                />
            )}
        </>
    )
}

export default BodyComponent