import { Routes, Route } from "react-router-dom"
import { DependencyCreate } from "./Components/DependencyCreate"
import { DependencyEdit } from "./Components/DependencyEdit"
import {  DependencyList  } from "./Components/DependencyList"

export const DependencyRouter = () => 
{
    return (
        <Routes>
            <Route path="/" element={<DependencyList/>}/> 
            <Route path="/create" element={<DependencyCreate/>} />
            <Route path="/edit/:dependency_id" element={<DependencyEdit/>} />          
        </Routes>
    )
}