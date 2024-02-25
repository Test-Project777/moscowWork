import axios from 'axios';
import type { AddVacancyFormData, VacancyType } from '../type/vacansy';
import type { CategoryType } from '../type/categorys';

export const apiInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiCategoryService {
  static async getCategory(): Promise<CategoryType[]> {
    const response = await apiInstance.get<CategoryType[]>('/api/category');
    console.log(response.data, 11111);

    return response.data;
  }
}

export default ApiCategoryService;
