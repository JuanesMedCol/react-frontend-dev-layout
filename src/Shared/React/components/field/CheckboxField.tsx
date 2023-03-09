import {ErrorMessage, useField} from "formik";

interface Props {
    label: string,
    name: string,
    [x:string]: any
}


export const CheckboxField = ({ label, ...props }:Props) =>
{
    const [ field, meta ] = useField({...props, type: 'checkbox'})

    return (
        <>
            <label htmlFor={ props.id || props.name }>
                {label}
            </label>
            <input type='checkbox' {...field} {...props} />
            <ErrorMessage name={props.name} component='span' className='custom-class'/>
        </>
    )
}