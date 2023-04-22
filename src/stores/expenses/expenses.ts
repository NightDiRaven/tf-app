import { defineStore } from "pinia";
import { IExpense } from "@/stores/expenses/IExpense";
import { mockExpense } from "@/mock/mockExpense";

interface IExpensesStoreState {
  items: IExpense[];
}

export const useExpensesStore = defineStore("expenses", {
  state: () =>
    <IExpensesStoreState>{
      items: [
        mockExpense({ title: "Ипотека" }),
        mockExpense({ title: "Магазин" }),
        mockExpense({ title: "Шиномонтаж" }),
        mockExpense({ title: "Кино" }),
        mockExpense({ title: "Аптека" }),
      ],
    },
  actions: {},
});