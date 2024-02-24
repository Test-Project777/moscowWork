export type VacancyType = {
  id: number;
  name: string;
  price: string;
  image: string;
  company: string;
  info: string;
  userId: number;
  format: string;
  expireance: string;
  education: string;
  createdAt: string;
  updatedAt: string;
};

export type VacansysState = {
  vacancy: [] | VacancyType[];
  selectedVacansy: null | VacancyType;
  sortObrazovanieNet: [] | VacancyType[];
  sortObrazovanieSrednee: [] | VacancyType[];
  sortObrazovanieVyshee: [] | VacancyType[];
  allVacans: [] | VacancyType[];
  sortPrice40k: [] | VacancyType[];
  sortPrice80K: [] | VacancyType[];
  sortPrice100K: [] | VacancyType[];
  sortPrice120K: [] | VacancyType[];
  sortPrice150K: [] | VacancyType[];
  sortPriceBolee150K: [] | VacancyType[];
  sortOpytRabNet: [] | VacancyType[];
  sortOpytRab1_3: [] | VacancyType[];
  sortOpytRab3_6: [] | VacancyType[];
  sortOpytRabBolee6: [] | VacancyType[];
};
