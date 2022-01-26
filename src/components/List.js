import React, { useEffect, useState } from "react";
import { endpointComida } from "../helpers/Url";
import { StyledTable, StyledThead, StyledTd, StyledButtonList } from "../styleds/StyledsList"
import Swal from "sweetalert2";

const List = () => {

    const [comida, setcomida] = useState([]);

    useEffect(() => {
        getComida()
    }, [])

    const getComida = async () => {
        const resp = await fetch(endpointComida)
        const data = await resp.json()

        setcomida(data)
    }

    const deleteComida = async (idC) => {
        const resp = await fetch(endpointComida + idC, {
            method: "DELETE"
        })

        getComida()

        Swal.fire({
            icon: 'success',
            title: 'Comida eliminada correctamente',
            confirmButtonColor: '#BFAA8F'
        })
    }

    return (
        <div>
            <StyledTable>
                <StyledThead>
                    <tr>
                        <StyledTd>Nombre</StyledTd>
                        <StyledTd>Tipo</StyledTd>
                        <StyledTd>Precio</StyledTd>
                        <StyledTd>Imagen</StyledTd>
                        <StyledTd>Accion</StyledTd>
                    </tr>
                </StyledThead>
                <tbody>
                    {
                        comida.map(c => (
                            <tr key={c.id}>
                                <StyledTd>{c.nombreComida}</StyledTd>
                                <StyledTd>{c.tipoComida}</StyledTd>
                                <StyledTd>{c.precio}</StyledTd>
                                <StyledTd><img src={c.imagen} width="150" /></StyledTd>
                                <StyledTd><StyledButtonList onClick={() => deleteComida(c.id)}>Eliminar Comida</StyledButtonList></StyledTd>
                            </tr>
                        ))
                    }
                </tbody>
            </StyledTable>
        </div>
    );
};

export default List;
