import { toast, ToastOptions } from "react-toastify";
import { ResponseDTO } from "../Http/ResponseDTO";
import 'react-toastify/dist/ReactToastify.css'
import { ModuleExamplesResponseDTO, ModuleExampleResponseDTO } from "../../Project/ModuleExample/Domain/Interfaces";

const toastConfigurations:ToastOptions = {
    position: toast.POSITION.BOTTOM_CENTER,
    closeButton: false,
    theme: 'colored', 
    hideProgressBar: true, 
    autoClose: 2500
}
const toastDarkConfigurations:ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    closeButton: false,
    theme: 'colored', 
    hideProgressBar: true, 
    autoClose: 2500
}


const toastSideConfigurations:ToastOptions = {
    position: toast.POSITION.TOP_LEFT,
    closeButton: false,
    theme: 'colored', 
    hideProgressBar: true, 
    autoClose: 2500
}
export const toastAlert = (response:ResponseDTO | ModuleExamplesResponseDTO | ModuleExampleResponseDTO )  => {
    console.log(response.message)
    if (! response.success) {
        const resptext = JSON.stringify(response.errors).replace(/[`~!@#$%^&*()_|+\-=?;'".<>\{\}\[\]\\\/]/gi, '\n')
        toast.error('::::: A OCURRIDO UN ERROR :::::\n'+resptext, toastConfigurations)
        return false;
    }
    toast.success('¡Acción completada correctamente!', toastConfigurations)
    return true;
}
export const toastLeftAlert = (response: ResponseDTO | ModuleExamplesResponseDTO | ModuleExampleResponseDTO )  => {
    console.log(response.message)
    if (! response.success) {
        const resptext = JSON.stringify(response.errors).replace(/[`~!@#$%^&*()_|+\-=?;'".<>\{\}\[\]\\\/]/gi, '\n')

        toast.error('::::: A OCURRIDO UN ERROR :::::\n'+resptext, toastSideConfigurations)
        return false;
    }
    toast.success('¡Acción completada correctamente!', toastConfigurations)
    return true;
}
