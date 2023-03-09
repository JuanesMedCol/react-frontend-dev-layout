import { NavBarItem } from "./NavBarItem";
import { push as Menu } from "react-burger-menu";
import { v4 as uuidv4 } from "uuid";
import { MenuPlatform } from "../../../Domain/Menu/Menu";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { items } = MenuPlatform
  return ( 
    // Pass on our props
    <Menu {...props}>
      <ul>
                { items.map( item => <NavBarItem item={item} key={uuidv4()} /> ) }
      </ul>
    </Menu>
  );
};
