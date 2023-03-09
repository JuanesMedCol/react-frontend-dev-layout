import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { NoBarWrapper, Wrapper, WrapperIcon } from '../styles/Wrappers';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../menu/NavBar";
import { Menu } from "./Menu";


export const Layout = () => {

    const navigate = useNavigate();


    return (<>
     
    <Menu/>
           <section className="flex relative">
               <Wrapper id="page-wrap">
                   <Outlet/> 
               </Wrapper>
           </section>
    </>
    )
}