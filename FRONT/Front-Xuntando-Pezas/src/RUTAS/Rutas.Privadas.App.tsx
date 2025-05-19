import { Routes, Route } from "react-router-dom";
import Home from "../PAXINAS/PRIVADAS/Home";
import ProductosApp from '../PAXINAS/PRIVADAS/Productos/ProductosApp';

<Route path="/produtos" element={<ProductosApp />} />



export default function RutasPrivadasApp() {
    return <>
        <Routes>
            <Route path="/app" element={<Home />} />
            <Route path="/produtos" element={<ProductosApp />} />
        </Routes>

    </>
}