import axios from 'axios';
import type { AddVacancyFormData, VacancyType } from '../type/vacansy';

export const apiInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiVacansyService {
  static async getVacansy(): Promise<VacancyType[]> {
    const response = await apiInstance.get<VacancyType[]>('/api');
    console.log(response.data, 11111);

    return response.data;
  }

  static async addVacansy(data: AddVacancyFormData): Promise<VacancyType[]> {
    const response = await apiInstance.post<VacancyType>('/api', data);
    console.log(data,"service");
    
    if (response.status === 201) return [response.data]; // Обернуть в массив
    return Promise.reject(new Error('Error posting to server'));
  }
}

export default ApiVacansyService;
