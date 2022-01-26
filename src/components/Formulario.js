import React, { useState } from 'react';
import { endpointComida } from '../helpers/Url';
import { FileImagen } from '../helpers/Cloudinary';
import { StyledDivForm, StyledLabelForm, StyledInputForm, StyledButtonForm } from '../styleds/StyledsForm';
import Swal from 'sweetalert2';

const Formulario = () => {

    const [comida, setComida] = useState({
        nombreComida: '',
        tipoComida: '',
        precio: '',
        imagen: ''
    })

    const { nombreComida, tipoComida, precio, imagen } = comida

    const cambioInput = ({ target }) => {
        setComida({
            ...comida,
            [target.name]: target.value
        })
        console.log(target)
    }

    const cambioImagen = (e) => {
        const imagen = e.target.files[0]
        FileImagen(imagen)
            .then(response => {
                comida.imagen = response
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const envioFormulario = (e) => {
        e.preventDefault()
    }

    const envioApi = async () => {
        await fetch(endpointComida, {
            method: 'POST',
            body: JSON.stringify(comida),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })

        Swal.fire({
            icon: 'success',
            title: 'Comida agregada correctamente',
            confirmButtonColor: '#BFAA8F'
        })

        window.location.reload()
    }

    return (
        <StyledDivForm>
            <form id='Formulario' onSubmit={envioFormulario}>
                <div>
                    <StyledLabelForm>Nombre</StyledLabelForm>
                    <StyledInputForm type="text" id='nombreComida' name='nombreComida' onChange={cambioInput} value={nombreComida} placeholder='Nombre de la comida' />
                </div>
                <div>
                    <StyledLabelForm>Tipo Comida</StyledLabelForm>
                    <StyledInputForm type="text" id='tipoComida' name='tipoComida' onChange={cambioInput} value={tipoComida} placeholder='Tipo de comida' />
                </div>
                <div>
                    <StyledLabelForm>Precio</StyledLabelForm>
                    <StyledInputForm type="text" id='precio' name='precio' onChange={cambioInput} value={precio} placeholder='Precio $' />
                </div>
                <div>
                    <StyledLabelForm>Precio</StyledLabelForm>
                    <input type="file" id='imagen' name='imagen' onChange={cambioImagen} value={imagen} />
                </div>
                <div>
                    <StyledButtonForm type='submit' id='btnEnviar' onClick={() => envioApi()}>Enviar</StyledButtonForm>
                </div>
            </form>
        </StyledDivForm>
    );
};

export default Formulario;
