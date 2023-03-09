import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../Shared/React/components/layout/Layout";
// Router List
import { DependencyRouter } from "../CORS/Dependency/Infrastructure/DependencyRouter";
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
                                <Route path="example/*" element={<DependencyRouter/>}/> 
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