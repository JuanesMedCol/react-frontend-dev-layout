import { http } from '../../../../Shared/Http/http';
import { Dependency, DependenciesResponseDTO, DependencyResponseDTO } from '../Interfaces';
export const DependencyListService = async () => {
  const dependency = await http.get<DependenciesResponseDTO>('dependency/list');
  return dependency.payload.data.map((dependency): Dependency => ({
    id: dependency.id,
    name: dependency.name,
    system_code: dependency.system_code
  }));
};
export const DependencyCreateService = async (dependency: Dependency | any) => {
  return await http.post<DependencyResponseDTO>('dependency/create', JSON.stringify(dependency));
};
export const DependencySearchByIdService = async (id: string) => {
  const Dependency = await http.get<DependencyResponseDTO>('dependency/dependencia/' + id);
  return Dependency.payload.data;
};
export const DependencyUpdateService = async (dependency: Dependency | any) => {
  return await http.post<DependencyResponseDTO>('dependency/update/' + dependency.id, JSON.stringify(dependency));
};
export const DependencyDeleteService = async (id: string) => {
  return await http.delete<DependencyResponseDTO>('dependency/delete/' + id);
};