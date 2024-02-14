import axios from 'axios';
import type { VacancyType } from '../type/vacansy';

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
}

export default ApiVacansyService;
