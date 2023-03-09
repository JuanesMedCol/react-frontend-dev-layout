import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../Shared/React/components/layout/Layout";
// Router List
import { ModuleExampleRouter } from "../Project/ModuleExample/Infrastructure/ModuleExampleRouter";
//Error Router
import { ErrorRouter } from "../Error/Infrastructure/ErrorRouter";

export const AppRouter = () => {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                        <Routes>
                            <Route path="" element={ <Layout /> }>
                                <Route path="example/*" element={<ModuleExampleRouter/>}/> 
                                {/*404 Error Handler*/}
                                <Route path="/*" element={ < ErrorRouter />} />
                            </Route>
                        </Routes>
                }/>
            </Routes>

        </BrowserRouter>
        </>
    )


}