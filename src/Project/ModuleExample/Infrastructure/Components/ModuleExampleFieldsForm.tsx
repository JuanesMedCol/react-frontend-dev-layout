import { Form } from "formik"
import { useNavigate} from "react-router-dom";
import { InputField } from "../../../../Shared/React/components/field"
import {ButtonPrimary} from "../../../../Shared/React/components/styles/Buttons";



export const ModuleExampleFieldsForm = () => {
    
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate( -1 );
    }

    return (
            <Form>
                <InputField
                label='Nombre'
                name='name'
                type='text'>
                </InputField>

                <div className='text-right mt-2'>
                    <ButtonPrimary type='submit'>Guardar</ButtonPrimary>
                    <ButtonPrimary type='button' onClick={handleReturn}>Atrás</ButtonPrimary>
                </div>
            </Form>
    )
}