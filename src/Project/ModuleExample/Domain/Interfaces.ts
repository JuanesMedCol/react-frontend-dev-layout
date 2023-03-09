import { ResponseDTOBase } from "../../../Shared/Http/ResponseDTO";

export interface ModuleExample{
    id                   : string,
    name                 : string,
}

export interface ModuleExampleProps{
    example: ModuleExample,
    fatherEvent: (id:string) => void
}

interface ModuleExamplesDTO{
    data: ModuleExample[],
}

interface ModuleExampleDTO{
    data: ModuleExample,
}

export interface ModuleExampleResponseDTO extends ResponseDTOBase{
    payload: ModuleExampleDTO,
}

export interface ModuleExamplesResponseDTO extends ResponseDTOBase{
    payload: ModuleExamplesDTO,
}