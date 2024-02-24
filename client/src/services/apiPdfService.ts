import axios from 'axios';
import type { PdfFile } from '../type/pdf/index';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiPdfService {
  static async postPdf(pdfFile: PdfFile): Promise<void> {
    const formData = new FormData();
    formData.append('pdf', pdfFile.blob, pdfFile.name);

    const response = await apiInstance.post<void>('/pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status !== 201) {
      throw new Error('Error posting to server');
    }
  }
}

export default ApiPdfService;
