<template>
  <ExpensesFilter />
  <ExpensesAdd />
  <ExpensesGrid :items="expenses" />
</template>

<script setup lang="ts">
import ExpensesGrid from "@/components/Expenses/ExpensesList/ExpensesList.vue";
import { useExpensesStore } from "@/stores/expenses/expenses";
import ExpensesFilter from "@/components/Expenses/ExpensesFilter/ExpensesFilter.vue";
import {computed, ref, watch} from "vue";
import { useRoute } from "vue-router";
import { fromListQuery } from "@/utils/formatListQuery";
import { IExpense } from "@/stores/expenses/IExpense";
import ExpensesAdd from "@/components/Expenses/ExpensesAdd/ExpensesAdd.vue";

const expensesStore = useExpensesStore();
const route = useRoute();

const expenses = computed<IExpense[]>(() => {
    const categories =  route.query?.categories
        ? fromListQuery(String(route.query.categories))
        : [];

    return expensesStore
        .getItems({
            categories: categories.map((categoryId) => +categoryId),
        })
});
</script>
