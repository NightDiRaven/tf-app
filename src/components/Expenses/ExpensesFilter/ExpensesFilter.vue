<template>
    <div :class="$style.el">
        Фильтры:
        <div :class="$style.content">
            <ExpensesFilterCategories />
        </div>
    </div>
</template>

<script setup lang="ts">

import BaseButton from "@/components/Base/BaseButton.vue";
import ExpensesFilterCategories from "@/components/Expenses/ExpensesFilter/ExpensesFilterList.vue";



</script>

<style module lang="scss">
.el {
  padding: 20px;
  gap: 15px;
}
</style>
