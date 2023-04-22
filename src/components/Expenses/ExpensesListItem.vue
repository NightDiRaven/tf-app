<template>
  <li :class="$style.el">
    <div :class="$style.head">
      <div :class="$style.title">
        {{ item.title }}
      </div>
      <ExpensesListItemCategories :categories="item?.categories" />
    </div>
    <div :class="$style.total">
      <span>{{ item.total }} ₽</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { IExpense } from "@/stores/expenses/IExpense";
import ExpensesListItemCategories from "@/components/Expenses/ExpensesListItemCategories.vue";

defineProps<{
  item?: IExpense;
}>();
</script>

<style module lang="scss">
.el {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  background: rgba(241, 239, 239, 0.55);
}

.head {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 18px;
  font-weight: 500;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.category {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 10px 2px 4px;
  border-radius: 16px;
  border: 1px solid;
}

.categoryColor {
  background: var(--color, lightgrey);
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.categoryTitle {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}

.total {
  color: navajowhite;
  font-size: 18px;
  background: linear-gradient(45deg, #555 0, #414141 100%);
  border-radius: 10px;
  padding: 10px;
}
</style>
