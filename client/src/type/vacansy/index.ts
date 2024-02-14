export type VacancyType = {
  id: number;
  name: string;
  price: string;
  image: string;
  company: string;
  info: string;
  userId: number;
  format: string;
  createdAt: string;
  updatedAt: string;
};

export type VacansysState = {
  vacancy: [] | VacancyType[];
  selectedVacansy: null | VacancyType;
};
