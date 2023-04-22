import { defineStore } from "pinia";
import { IExpenseCategory } from "@/stores/categories/IExpenseCategory";
import {mockExpenseCategory} from "@/mock/mockExpenseCategory";

interface IExpensesStoreState {
  items: IExpenseCategory[];
}

export const useCategoriesStore = defineStore("expense-categories", {
  state: () => (<IExpensesStoreState>{
    items: [
        mockExpenseCategory({
          title: 'Развлечения',
          color: 'red'
        }),
        mockExpenseCategory({
          title: 'Магазины',
          color: 'orange'
        }),
        mockExpenseCategory({
          title: 'Аптеки',
          color: 'green'
        }),
    ],
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
  }
});