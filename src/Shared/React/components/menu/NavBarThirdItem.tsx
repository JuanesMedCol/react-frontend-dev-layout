import { Link } from "react-router-dom"
import { ThirdLevelItemMenu } from "../../../Domain/Menu/Menu"
import { WrapperItemThirdNavBar } from "../styles/Wrappers"

interface Prop {
    item:ThirdLevelItemMenu
}

export const NavBarThirdItem = ({item}:Prop) => {

    const {name, path} = item

    return (
        <WrapperItemThirdNavBar>
            <li>
                {
                    path ? <Link to={path}>{ name }</Link> : name
                }
            </li>  
        </WrapperItemThirdNavBar>
    )
}