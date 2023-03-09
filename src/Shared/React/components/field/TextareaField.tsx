import {ErrorMessage, useField} from "formik";

interface Props {
    label: string,
    name: string,
    placeholder?: string,
    [x:string]: any,
}


export const TextareaField = ({ label, ...props }:Props) =>
{
    const [ field, meta ] = useField(props)
    const {error, touched} = meta;
    return (
        <>
            <div className={`mt-4 w-max p-2 rounded-t-lg font-bold text-white ${ error && touched ? ` bg-red-600`:`bg-gray-400`}`}>
                <label htmlFor={ props.id || props.name }> { label } </label>
            </div>
            <div className="mb-1">
                <textarea {...field} {...props} className={`w-full outline-none rounded-r-lg border-2 rounded-b-lg p-2 ${ error && touched ? `text-red-600 border-red-600`:`border-gray-400`}`}/>
            </div>
            <ErrorMessage name={props.name} component='div' className='text-left text-red-600 mb-2'/>
        </>
    )
}