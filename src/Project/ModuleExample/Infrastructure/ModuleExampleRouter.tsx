import { Routes, Route } from "react-router-dom"
import { ModuleExampleCreate } from "./Components/ModuleExampleCreate"
import { ModuleExampleEdit } from "./Components/ModuleExampleEdit"
import {  ModuleExampleList  } from "./Components/ModuleExampleList"

export const ModuleExampleRouter = () => 
{
    return (
        <Routes>
            <Route path="/" element={<ModuleExampleList/>}/> 
            <Route path="/create" element={<ModuleExampleCreate/>} />
            <Route path="/edit/:example_id" element={<ModuleExampleEdit/>} />          
        </Routes>
    )
}