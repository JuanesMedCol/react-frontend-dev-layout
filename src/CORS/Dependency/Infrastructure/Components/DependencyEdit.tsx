import { Formik } from "formik";
import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
import { useEffect, useState } from 'react';
import { Dependency } from '../../Domain/Interfaces';
import { DependencySearchByIdService, DependencyUpdateService  } from '../../Domain/Services/DependencyApplicationServices';
import { useNavigate, useParams } from "react-router-dom"
import { INITIAL_VALUE_DEPENDENCY } from "../../Domain/Types";
import { DependencyFieldsForm } from './DependencyFieldsForm';
import { DependencyValidationSchema } from '../Validation/DependencyValidationSchema';
import { ToastContainer } from 'react-toastify';
import { toastAlert } from '../../../../Shared/Toast/Alert';

export const DependencyEdit = () => {

  const { dependency_id } = useParams();

  const [dependency, setDependency] = useState<Dependency>(INITIAL_VALUE_DEPENDENCY);

  useEffect(() => {
    DependencySearchByIdService(String(dependency_id)).then((dependency) => setDependency(dependency))
  }, [dependency_id])

  const navigate = useNavigate();

  const onSubmitEventElement = (values:Dependency) => {
    DependencyUpdateService (values).then((resp) =>{
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
        initialValues={dependency}
        onSubmit={ values => { onSubmitEventElement(values) }}
        validationSchema={DependencyValidationSchema}>
          {
            (formmik) => (
              <DependencyFieldsForm/>
            )
          }
      </Formik>
    </WrapperContent>
    </>
  )
}