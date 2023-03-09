import { ResponseDTOBase } from "../../../Shared/Http/ResponseDTO";

export interface Status{
    id                   : string,
    name                 : string,
    system_code          : string
}

export interface StatusProps{
    status: Status,
    fatherEvent: (id:string) => void
}

interface StatusMultipleDTO{
    data: Status[],
}

interface StatusDTO{
    data: Status,
}

export interface StatusResponseDTO extends ResponseDTOBase{
    payload: StatusDTO,
}

export interface StatusMultipleResponseDTO extends ResponseDTOBase{
    payload: StatusMultipleDTO,
}