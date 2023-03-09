import {object, string} from 'yup'

export const ModuleExampleValidationSchema = object().shape({
    name                : string ().required('Requerido'),
})
