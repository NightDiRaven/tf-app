<template>
  <ul :class="$style.el">
    <ExpensesFilterListItem v-for="category in categoriesStore.items"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "@/stores/categories/categories";
import ExpensesFilterListItem from "@/components/Expenses/ExpensesFilter/ExpensesFilterListItem.vue";

const categoriesStore = useCategoriesStore();
</script>

<style module lang="scss">
.el {
  padding: 20px 0;
  margin: 0 -10px;
  gap: 15px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
