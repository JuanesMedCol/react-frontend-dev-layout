import { Link, useLocation } from "react-router-dom";
import { ItemMenu } from "../../../Domain/Menu/Menu";
import { WrapperItemPrimaryNavBar, WrapperItemSecondNavBar } from "../styles/Wrappers";
import { NavBarSecondItem } from "./NavBarSecondItem";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from 'react';
import { ListIcons } from "../../../Domain/Menu/ListIcons";
import { CubeIcon } from "@heroicons/react/outline";


interface Prop {
    item:ItemMenu
}


export const NavBarItem = ({item}:Prop) => {
    
    const { name, path, icon, children, menuActive } = item
    const { pathname } = useLocation();
    const [ open, SetOpen] = useState(false);

    const IconTag = ListIcons[icon];
    
    const isActive = menuActive.includes(pathname)

    const openItem = () => {
        SetOpen(pre => !pre)
    }
    

    return (
        <>
            {   
                
                <>
                    <li className="mb-4" onClick={openItem}>
                        <WrapperItemPrimaryNavBar className={isActive ? 'isActive' : ''}>
                            <span className="mr-2">
                            {/* <IconTag style={{ width: '1.5rem' }}/> */}
                                {IconTag ? <IconTag style={{ width: '1.5rem' }}/>: <CubeIcon style={{ width: '1.5rem' }} />}
                            </span>
                            <span>
                                { 
                                    path ? <Link to={path}>{ name }</Link> : name 
                                }
                            </span>
                        </WrapperItemPrimaryNavBar>
                        { children !== null ? 
                            <WrapperItemSecondNavBar className={open ? 'isOpen' : 'noOpen'} style={{ width:'95%'}}>
                            {
                                children?.map( item => <NavBarSecondItem item={item} key={uuidv4()} />)
                            }
                            </WrapperItemSecondNavBar>
                            : ''
                        }
                    </li>
                </>
            }
        </>
    )
}