    import { INITIAL_VALUE_EXAMPLE } from "../../Domain/Types";
    import { ModuleExampleFieldsForm } from './ModuleExampleFieldsForm';
    import { ModuleExampleValidationSchema } from '../Validation/ModuleExampleValidationSchema';
    import { ModuleExampleCreateService } from '../../Domain/Services/ModuleExampleApplicationServices';
    import { ModuleExample } from '../../Domain/Interfaces';
    import { Formik } from "formik";
    import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
    import { useNavigate } from 'react-router-dom';
    import { v4 as uuidv4 } from 'uuid'
    import { toastAlert } from '../../../../Shared/Toast/Alert';
    import { toast, ToastContainer } from 'react-toastify';
    

export const ModuleExampleCreate = () => {
    
    const navigate = useNavigate();

    
    const onSubmitEventElement = (ModuleExample:ModuleExample) => {
        ModuleExample.id = uuidv4();
        ModuleExampleCreateService(ModuleExample).then((resp) =>{
            if (JSON.stringify(resp.success) === 'false')  {
                toast.error('Hay un conflicto al momento de crear',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    })
                }
            else if (toastAlert(resp)) {
                setTimeout(function(){
                        navigate(-1);
                   },2500);    
                }
            }
          
        );
    }

  
    return (
        <>
        <ToastContainer/>
        <WrapperTitle>
            Crear Ejemplo
        </WrapperTitle>
        <WrapperContent>
            <Formik
                initialValues={INITIAL_VALUE_EXAMPLE}
                onSubmit={ (values) => { onSubmitEventElement(values) }}
                validationSchema={ModuleExampleValidationSchema}
                >
                {
                    (formmik) => (
                        <ModuleExampleFieldsForm />
                    )
                }
            </Formik>
        </WrapperContent>
        </>
    )
}
