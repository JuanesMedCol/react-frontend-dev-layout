import styled from "styled-components";
import tw  from "twin.macro";
import { Link } from "react-router-dom";

export const Button = styled.button`
    ${tw `inline-flex items-center p-2 w-auto px-5 rounded-2xl transition ease-in-out duration-300`}
`

export const ButtonPrimary = styled(Button)`
    ${tw `bg-secondary-500 hover:bg-primary-500 text-white mx-2 transition ease-in-out duration-300`}
`

export const ButtonLogin = styled(Button)`
    ${tw `transition ease-in-out duration-300 text-xl font-bold text-center border rounded-xl bg-secondary-500 hover:bg-primary-500 py-3 px-6 text-white leading-tight`}
`

export const LinkPrimary = styled(Link)`
    ${tw `transition ease-in-out duration-300`}
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    width: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    background-color: #67b5dd;
    color: rgba(255, 255, 255, 1);
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    &:hover{
        background-color: #243f59;
    }
`
