import { Link } from "react-router-dom";
import { SecondLeveltemMenu } from "../../../Domain/Menu/Menu";
import { NavBarThirdItem } from "./NavBarThirdItem";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";

interface Prop {
    item:SecondLeveltemMenu
}

export const NavBarSecondItem = ({item}:Prop) => {
    const {name, path, children} = item


    return (
        <>
                <li className="full relative my-2 mx-1">
                    { 
                        path ? <Link className="mb-2" to={path}>{ name }</Link> : <span className="mb-2">{ name }</span>
                    }
                    {
                        children?.map( item => <NavBarThirdItem item={item} key={uuidv4()} />)
                    }
                </li>
        </>
    )
}