import NavBar from "../menu/NavBar"
import { WrapperFloatHeader } from "../styles/Wrappers"
import { Header } from "./Header"

export const Menu = () => {

    var styles = {
        bmOverlay: {
          background: 'rgba(255, 255, 255, 0)'
        }
      }

    return (<>
    <WrapperFloatHeader>
        <Header/>
        <NavBar styles={ styles } disableAutoFocus width={ '16rem' }  isOpen={ true } customBurgerIcon={ <img src="/images/logo.svg" alt="" /> } pageWrapId={"page-wrap"} outerContainerId={"App"}/>
    </WrapperFloatHeader>
    </>)
}