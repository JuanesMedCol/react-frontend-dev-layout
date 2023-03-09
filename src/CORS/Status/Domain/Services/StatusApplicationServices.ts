import { http } from '../../../../Shared/Http/http';
import {Status, StatusMultipleResponseDTO, StatusResponseDTO} from '../Interfaces';

export const StatusListService = async (filterstatus:String) => {

    const status = await http.get<StatusMultipleResponseDTO>(`status/list/${filterstatus}`);
    return status.payload.data.map
    ((status):Status=> ({
        id                   : status.id,
        name                 : status.name,
        system_code          : status.system_code,
    }));
}
