import styled from "@emotion/styled";
import DataTable from "react-data-table-component-with-filter";
import tw  from "twin.macro";

export const Table = styled.table`

    ${tw `w-full`}
    border-collapse: collapse;

    & th{
       ${tw `bg-primary-500 text-white font-bold p-2 border-secondary-500` };
    
        border-right: 2px solid;

    }
    & th:first-child
    {
       ${tw `rounded-tl-lg`}
    }
    & th:last-child, td:last-child
    {
       ${tw `border-r-0`}
    }
    & th:last-child
    {
       ${tw `rounded-tr-lg`}
    }
    & tr{
        ${tw `bg-white`}
    }
    & tr:nth-of-type(odd){
        background-color: #f2f2f2;
    }
    & td{
        ${tw `p-2`}
        border-right: 2px solid #ccc;
    }
    & tr:last-child{
        & td:first-child{
            ${tw `rounded-bl-lg`}
        }
        & td:last-child{
            ${tw `rounded-br-lg`}
        }
    }
`

export const TableFilter = styled(DataTable)`
`
