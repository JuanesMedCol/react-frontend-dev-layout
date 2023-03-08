import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './Shared/React/components/Layout';

export const AppRouter = () => 
{

    return(

        <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }></Route>
            </Routes>
          </BrowserRouter>  
        </>

    )

}