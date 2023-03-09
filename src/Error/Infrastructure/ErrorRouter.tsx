import { Routes, Route } from "react-router-dom"
import { Error401 } from "./Components/Error401"
import { Error404 } from "./Components/Error404"
import { Error500 } from "./Components/Error500"


export const ErrorRouter = () => {
    return (
    <Routes>
        <Route path="/401" element={<Error401/>} />
        <Route path="/500" element={<Error500/>} />
        <Route path="*" element={<Error404/>} />
    </Routes>
    )
}