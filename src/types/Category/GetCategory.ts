export interface Category {
  id: string;
  name: string;
  plannedBudget: string;
  parentCategory: string;
  plannedBudgetValur: string;
}

export interface ParentCategory {
  id: string;
  icon: string;
  name: string;
  plannedBudget: string;
}
