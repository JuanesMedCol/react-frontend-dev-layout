import {v4 as uuidv4} from "uuid";
import {Status} from "./Interfaces";

export const INITIAL_VALUE_Status:Status = {
    id                   : uuidv4(),
    name                 : '',
    system_code          : ''
}