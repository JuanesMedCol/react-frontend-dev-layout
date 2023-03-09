import styled from "@emotion/styled";
import tw from "twin.macro";
import 'tw-elements/dist/css/index.min.css';
import 'flowbite/dist/flowbite.min.css'


export const Wrapper = styled.div`     
    margin: 4.5rem 0 1.5rem 1.5rem; 
`
export const NoBarWrapper = styled.div`     
    margin: 1rem 0 1.5rem 1.5rem; 
`

export const WrapperIcon = styled.div`
    ${tw`w-64 flex-none flex`}
`

export const WrapperUserName = styled.div`
    ${tw`flex-grow bg-gray-200 flex justify-end px-4 rounded-bl-lg py-2`}
`

export const WrapperNav = styled.nav`
    margin-top: -10rem;
    ${tw`absolute top-0 left-2`}
`

export const WrapperItemPrimaryNavBar = styled.div`
	${tw`flex flex-wrap overflow-hidden hover:bg-primary-500 hover:text-secondary-500 cursor-pointer p-2 rounded-lg font-bold text-primary-500 mb-3 transition ease-in-out duration-300`}
`

export const WrapperItemSecondNavBar = styled.ul`
	${tw`bg-white hidden overflow-hidden mx-1 w-96 rounded-lg p-2 my-1 text-primary-500 font-bold relative transition-opacity duration-75 transition ease-in-out duration-300`}
`

export const WrapperItemThirdNavBar = styled.ul`
	${tw`absolute bg-white w-full overflow-hidden -right-32 top-0 w-96 rounded-lg shadow-md`}
`

export const WrapperBorder = styled.div`
    ${tw`border-2 border-primary-500 p-8 relative rounded-sm`}
`
export const WrapperContent = styled.div`
    width: calc(99vw - 1.5rem);
    ${tw `bg-gray-200 p-4 rounded-lg`}


`
export const WrapperTitle = styled.h2`
    ${tw`text-3xl font-black mb-4`}
`

export const WrapperHeader = styled.header`
    ${tw`mb-10`}
    & nav {
        ${tw`flex justify-evenly`}
        & a {
            ${tw`bg-primary-500 block px-12 py-2 text-white hover:bg-primary-900`}
        }
    }
`

export const WrapperFloatHeader = styled.div`
    width: 100vw; z-index:5; 
    box-shadow: 0px 5px 5px 0px rgba(255,255,255,1);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(255,255,255,1);
    ${tw `bg-white fixed`}
`

export const WrapperFieldHead = styled.div`
    ${tw`w-max mt-4 p-2 rounded-t-lg font-bold  text-white bg-gray-400`}
`

export const WrapperAcorddion = styled.div`
    ${tw`w-full outline-none rounded-r-lg rounded-b-lg border-2 border-gray-400`}
`

export const WrapperAcorddionItem = styled.div`
    ${tw`border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200`}
`

export const WrapperAcorddionTitle = styled.button`
    ${tw`relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white
    border-0 rounded-none transition focus:outline-none`}
`

export const WrapperLogin = styled.div`
    ${tw`my-auto p-8 align-middle text-center bg-white`}
`

