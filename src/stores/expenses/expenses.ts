import { defineStore } from "pinia";
import { IExpense } from "@/stores/expenses/IExpense";
import { mockExpense } from "@/mock/mockExpense";

interface IExpensesStoreState {
  items: IExpense[];
}

interface GetItemsFilterOptions {
  categories?: number[]
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
  actions: {
    getItems (filterOptions: GetItemsFilterOptions) {
      // TODO тут какая-нибудь логика запроса уже фильтрованных данных, пока просто отфильтруем их тут
      return this.items.filter(item => {
        if(filterOptions.categories?.length) {
          return item.categories.some(category => filterOptions.categories?.includes(category))
        }
        return true
      })
    },
    getEmpty(): Partial<IExpense> {
      return {
        id: Math.ceil(Math.random()*1000),
        categories: []
      }
    },
    add(value: IExpense) {
      this.items.push(value)
      console.log(this.items)
    }
  },
});