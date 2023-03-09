    import { INITIAL_VALUE_DEPENDENCY } from "../../Domain/Types";
    import { DependencyFieldsForm } from './DependencyFieldsForm';
    import { DependencyValidationSchema } from '../Validation/DependencyValidationSchema';
    import { DependencyCreateService } from '../../Domain/Services/DependencyApplicationServices';
    import { Dependency } from '../../Domain/Interfaces';
    import { Formik } from "formik";
    import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
    import { useNavigate } from 'react-router-dom';
    import { v4 as uuidv4 } from 'uuid'
    import { toastAlert } from '../../../../Shared/Toast/Alert';
    import { toast, ToastContainer } from 'react-toastify';
    

export const DependencyCreate = () => {
    
    const navigate = useNavigate();
    const onSubmitEventElement = (Dependency:Dependency) => {
        Dependency.id = uuidv4();
        DependencyCreateService(Dependency).then((resp) =>{
            if (JSON.stringify(resp.success) === 'false')  {
                toast.error('Hay una dependencia que coincide con el acrónimo que se puede crear para esta',
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
                initialValues={INITIAL_VALUE_DEPENDENCY}
                onSubmit={ (values) => { onSubmitEventElement(values) }}
                validationSchema={DependencyValidationSchema}
                >
                {
                    (formmik) => (
                        <DependencyFieldsForm />
                    )
                }
            </Formik>
        </WrapperContent>
        </>
    )
}
