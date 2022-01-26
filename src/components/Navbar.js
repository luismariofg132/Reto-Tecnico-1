import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNAvbar = styled.div`
width: 100%;
height: 40px;
background-color: #BFAA8F;
display: flex;
justify-content: center;
align-items: center;
`

const StyledSpan = styled.span`
font-size: 24px;
color: black;
`



export const Navbar = () => {
    return (
        <>
            <StyledNAvbar>
                <StyledSpan>Restaurante donde pancho</StyledSpan>
            </StyledNAvbar>
            <StyledNAvbar>
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/Agregar">Agregar</Link>
            </StyledNAvbar>
        </>
    )
}
