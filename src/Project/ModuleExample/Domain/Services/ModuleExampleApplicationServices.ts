import { http } from '../../../../Shared/Http/http';
import { ModuleExample, ModuleExamplesResponseDTO, ModuleExampleResponseDTO } from '../Interfaces';

export const ModuleExampleListService = async () => {
  const example = await http.get<ModuleExamplesResponseDTO>('example/list');
  return example.payload.data.map((example): ModuleExample => ({
    id: example.id,
    name: example.name,
  }));
};

export const ModuleExampleCreateService = async (example: ModuleExample | any) => {
  return await http.post<ModuleExampleResponseDTO>('product/create', JSON.stringify(example));
};

export const ModuleExampleSearchByIdService = async (id: string) => {
  const ModuleExample = await http.get<ModuleExampleResponseDTO>('example/' + id);
  return ModuleExample.payload.data;
};

export const ModuleExampleUpdateService = async (example: ModuleExample | any) => {
  return await http.post<ModuleExampleResponseDTO>('example/update/' + example.id, JSON.stringify(example));
};

export const ModuleExampleDeleteService = async (id: string) => {
  return await http.delete<ModuleExampleResponseDTO>('example/delete/' + id);
};