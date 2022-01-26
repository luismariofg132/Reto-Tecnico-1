import styled from "styled-components";

export const StyledDivForm = styled.div`
width: 80%;
margin: auto;
margin-top: 40px;
padding: 20px;
background-color: #F27B35;
border-radius: 20px;
`
export const StyledLabelForm = styled.label`
display: flex;
justify-content: center;
padding: 7px;
font-size: 18px;
margin: auto;
`

export const StyledInputForm = styled.input`
width: 100%;
margin-bottom: 15px;
height: 30px;
border-radius: 10px;
border: none;
background-color: #F2E1C2;
::placeholder{
    font-size: 18px;
}
`

export const StyledButtonForm = styled.button`
width: 100%;
height: 30px;
margin: 10px 0;
border: none;
background-color: #F2E1C2;
border-radius: 10px;
font-size: 18px;
font-weight: 500;
:hover{
    background-color: #b9ab90;
}
`