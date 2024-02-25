export type CategoryType = {
  id: string;
  name: string;
};
export type CategoryState = {
  categories: CategoryType[];
  selectedCategories: null | CategoryType;
};
