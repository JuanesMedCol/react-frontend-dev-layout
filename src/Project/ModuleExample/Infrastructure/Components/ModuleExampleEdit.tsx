import { Formik } from "formik";
import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
import { useEffect, useState } from 'react';
import { ModuleExample } from '../../Domain/Interfaces';
import { ModuleExampleSearchByIdService, ModuleExampleUpdateService  } from '../../Domain/Services/ModuleExampleApplicationServices';
import { useNavigate, useParams } from "react-router-dom"
import { INITIAL_VALUE_EXAMPLE } from "../../Domain/Types";
import { ModuleExampleFieldsForm } from './ModuleExampleFieldsForm';
import { ModuleExampleValidationSchema } from '../Validation/ModuleExampleValidationSchema';
import { ToastContainer } from 'react-toastify';
import { toastAlert } from '../../../../Shared/Toast/Alert';

export const ModuleExampleEdit = () => {

  const { example_id } = useParams();

  const [example, setModuleExample] = useState<ModuleExample>(INITIAL_VALUE_EXAMPLE);

  useEffect(() => {
    ModuleExampleSearchByIdService(String(example_id)).then((example) => setModuleExample(example))
  }, [example_id])

  const navigate = useNavigate();

  const onSubmitEventElement = (values:ModuleExample) => {
    ModuleExampleUpdateService (values).then((resp) =>{
      if (toastAlert(resp)) {
          setTimeout(function(){
                  navigate(-1);
              },2500);    
      }
  });
  }

  return (
    <>
    <div>
        <ToastContainer/>
        </div>
    <WrapperTitle>
        Editar Ejemplo
    </WrapperTitle>
    <WrapperContent>
      <Formik
        enableReinitialize={true}
        initialValues={example}
        onSubmit={ values => { onSubmitEventElement(values) }}
        validationSchema={ModuleExampleValidationSchema}>
          {
            (formmik) => (
              <ModuleExampleFieldsForm/>
            )
          }
      </Formik>
    </WrapperContent>
    </>
  )
}