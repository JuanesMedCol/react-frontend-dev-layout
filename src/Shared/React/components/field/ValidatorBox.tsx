import { ExclamationIcon } from '@heroicons/react/outline';
import { ButtonPrimary }  from '../styles/Buttons';       

interface Props {
    id: string,
    name: string,
    actionname: string,
    service: any,
    action?: string,
    [x:string]: any
}

export const ValidatorBox = ({ ...row }:Props) =>
{
    return (
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id={row.actionname+"-"+row.id} aria-labelledby={row.actionname+"-Label-"+row.id} aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="bg-secondary-500 modal-header flex flex-shrink-0 items-center justify-center p-4 border-b border-gray-200 rounded-t-md">
                            <div className="text-2xl font-bold justify-center w-full flex items-center text-center content-center text-white" id={row.actionname+"-Label-"+row.id}>Advertencia <ExclamationIcon className='w-10'/></div>
                        </div>
                        <div className="modal-body relative p-4 text-center">
                            Esta a punto de {row.action}<br/><b>{row.name}</b>
                        </div>
                        <div
                            className="modal-footer align-center text-center w-full flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                            <ButtonPrimary data-bs-dismiss="modal" onClick={ () => {row.service(row.id)} }>Aceptar</ButtonPrimary>
                            <ButtonPrimary data-bs-dismiss="modal">Cancelar</ButtonPrimary>
                        </div>
                        </div>
                    </div>
                    </div>
    )
}