import { Link, Outlet } from "react-router-dom"
import {Wrapper, WrapperHeader} from "../styles/Wrappers";

export const Dashboard = () => {
  return (
    <Wrapper>
      <WrapperHeader>
        <nav>
          <Link to="/project">Cursos</Link>
        </nav>
      </WrapperHeader>
      <Outlet/>
    </Wrapper>
  )
}