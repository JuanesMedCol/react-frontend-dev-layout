import { WrapperIcon, WrapperUserName } from "../styles/Wrappers"
import { useContext } from 'react';
import NavBar from "../menu/NavBar";


export const Header = () => {

    return (
        <header className="flex w-full"> 
        <WrapperIcon>
        </WrapperIcon>
            <WrapperUserName>
                <div className="flex flex-col hover:bg-primary-500 hover:text-secondary-500 h-12 rounded-lg text-primary-500 cursor-pointer text-right px-4 py-0.5 font-medium transition ease-in-out duration-300">
                </div>
            </WrapperUserName>
        </header>
    )    
}