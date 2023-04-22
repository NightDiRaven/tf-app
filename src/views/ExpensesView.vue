<template>
    <ExpensesFilter />
    <ExpensesGrid :items="expensesStore.items"/>
</template>

<script setup lang="ts">

import ExpensesGrid from "@/components/Expenses/ExpensesList.vue";
import {useExpensesStore} from "@/stores/expenses/expenses";
import ExpensesFilter from "@/components/Expenses/ExpensesFilter.vue";


const expensesStore = useExpensesStore()
</script>