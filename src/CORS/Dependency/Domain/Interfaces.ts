import { ResponseDTOBase } from "../../../Shared/Http/ResponseDTO";

export interface Dependency{
    id                   : string,
    name                 : string,
    system_code          : string,
}

export interface DependencyProps{
    dependency: Dependency,
    fatherEvent: (id:string) => void
}

interface DependenciesDTO{
    data: Dependency[],
}

interface DependencyDTO{
    data: Dependency,
}

export interface DependencyResponseDTO extends ResponseDTOBase{
    payload: DependencyDTO,
}

export interface DependenciesResponseDTO extends ResponseDTOBase{
    payload: DependenciesDTO,
}