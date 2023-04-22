import { getNextIdGenerator } from "@/mock/utils/getNextIdGenerator";
import { IExpenseCategory } from "@/stores/categories/IExpenseCategory";
import { getRandomArrayElement } from "@/mock/utils/getRandomArrayElement";

const getNextId = getNextIdGenerator();
export const mockExpenseCategory = (
  props: Partial<IExpenseCategory>
): IExpenseCategory => {
  const id = props.id ?? getNextId();
  return {
    id,
    title: `Категория # ${id}`,
    color: getRandomArrayElement(["red", "blue", "green", "orange"]),
    ...props,
  };
};
