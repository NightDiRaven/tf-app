import { IExpense } from "@/stores/expenses/IExpense";
import { getNextIdGenerator } from "@/mock/utils/getNextIdGenerator";
import { getRandomInteger } from "@/mock/utils/getRandomNumber";
import {useCategoriesStore} from "@/stores/categories/categories";
import {getRandomArrayElement, getRandomArrayElements} from "@/mock/utils/getRandomArrayElement";

const getNextId = getNextIdGenerator();
export const mockExpense = (props: Partial<IExpense>): IExpense => {
  const id = props.id ?? getNextId();
  const categoriesStore = useCategoriesStore()
  console.log(getRandomArrayElement(categoriesStore.items), categoriesStore.items)
  return {
    id,
    title: `Расход # ${id}`,
    total: Number((Math.random() * 1000).toFixed(2)),
    categories: getRandomArrayElements(categoriesStore.items, getRandomInteger(0, categoriesStore.items.length)).map(category => category.id),
    ...props,
  };
};
