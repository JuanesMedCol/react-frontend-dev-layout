import { WrapperContent } from "../../../Shared/React/components/styles/Wrappers"

export const Error404 = () => {
    return(
    <div className="items-center my-auto p-5 flex w-full" style={{height: "90vh", width: "calc(99vw - 16rem)"}}>
        <div className="text-center items-center w-full">
            <div className="text-9xl font-black rounded-xl w-full pb-5">
            <span className="text-9xl font-black bg-primary-500 rounded-xl w-fit px-7 text-white">
                404
            </span>
            </div>
            <div className="text-5xl font-black p-5 relative w-full">
            <span className="text-5xl font-black p-5 bg-secondary-500 text-primary-500 rounded-2xl relative ">Página no encontrada</span>
            </div>
        </div>
    </div>
    )
}