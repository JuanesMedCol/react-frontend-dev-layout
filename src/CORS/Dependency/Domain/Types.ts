import {v4 as uuidv4} from "uuid";
import {Dependency} from "./Interfaces";

export const INITIAL_VALUE_DEPENDENCY:Dependency = {
    id                   : uuidv4(),
    name                 : '',
    system_code          : ''
}