import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "../components/Formulario";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import '../styles/config.css'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/Agregar" element={<Formulario />} />
            </Routes>
        </BrowserRouter>
    )
}