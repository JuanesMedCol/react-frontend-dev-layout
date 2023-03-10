import { useContext, useEffect, useState } from 'react'
import { WrapperContent, WrapperTitle } from '../../../../Shared/React/components/styles/Wrappers';

import { DataTableStyle } from '../../../../Shared/React/components/styles/DataTableStyle';
import { TableFilter } from '../../../../Shared/React/components/styles/Tables';

import { ModuleExample } from '../../Domain/Interfaces';
import { ModuleExampleDeleteService, ModuleExampleListService } from '../../Domain/Services/ModuleExampleApplicationServices';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { LinkPrimary } from '../../../../Shared/React/components/styles/Buttons';
import { ValidatorBox } from '../../../../Shared/React/components/field/ValidatorBox';


export const ModuleExampleList = () => {
    
    const [examples, setModuleExample] = useState<ModuleExample[]>([]);
    
    useEffect(() => {
        ModuleExampleListService().then(setModuleExample)
    }, [])

    const ModuleExampleDelete = (id: string) => {
      ModuleExampleDeleteService(id).then((resp) => { 
        if (JSON.stringify(resp.success) === 'true') {
          setModuleExample(prev => prev.filter(example => example.id !== id));
          toast.info('Se ha eliminado una dependencia',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    }
                )}
        else {
                toast.error('No es posible eliminar una dependencia asignada a un curso',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    })
                }}
          )
    }

  const ModuleExampleItem =
  [
    {
      name: 'Nombre',
      selector: (row:any) => row.name,
      cell: (row:any) => row.name,
      sortable: true,
      reorder: true,
      filterable: true,
      marginBottom: '10px',
    },
    {
      name: 'Acciones',
      width: '12%',
      reorder: true,
      center: true,
      selector: (row:any) => row.name,
      cell: (row:any) =>
        <div className='flex justify-center w-full h-full'>
          <Link title='Editar un Ejemplo' to={"edit/" + row.id}>
                    <PencilIcon className='text-primary-900' height='28px'/>
          </Link>
          {
                <button title='Borrar un Ejemplo' data-bs-toggle="modal" data-bs-target={"#deleteModuleExample-"+row.id} >
                <TrashIcon className='text-primary-900' height='28px' />
                </button>
          }
          <ValidatorBox
                        id={row.id}
                        name={row.name}
                        actionname="deleteModuleExample"
                        service={ModuleExampleDelete}
                        action="deshabilitar la dependencia"
                        />
        </div>
    }
  ]  
    
  return (
    <>
    <ToastContainer/>
    <WrapperTitle>
        Ejemplo
    </WrapperTitle>
    <WrapperContent>
      <div className='p-2 w-full rounded-lg'>
        {
            <div className='text-right mb-8 mt-2'>
                <LinkPrimary to='create'>Crear Ejemplo</LinkPrimary>
            </div>
            }
        <TableFilter 
              columns={ModuleExampleItem}
              data={examples}
              customStyles={DataTableStyle}
              pagination
              responsive
              striped
              highlightOnHover
          />
      </div>
    </WrapperContent>
    </>
        
    )
}