<template>
    <ul :class="$style.el">
        <ExpensesItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
</template>

<script setup lang="ts">

import {IExpense} from "@/stores/expenses/IExpense";
import ExpensesItem from "@/components/Expenses/ExpensesListItem.vue";

defineProps<{
   items?: IExpense[]
}>()
</script>

<style module lang="scss">
.el {
  padding: 20px;
  display: grid;
  gap: 15px;
}
</style>
