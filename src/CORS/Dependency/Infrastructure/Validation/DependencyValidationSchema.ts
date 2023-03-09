import {object, string} from 'yup'

export const DependencyValidationSchema = object().shape({
    name                : string ().required('Requerido'),
})
