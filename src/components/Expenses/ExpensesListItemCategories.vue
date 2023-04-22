<template>
  <div :class="$style.el">
    <div v-for="category in currentCategories" :key="category.id" :class="$style.category">
      <div
        :class="$style.color"
        :style="{ '--color': category.color }"
      ></div>
      <span :class="$style.title">{{category.title}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "@/stores/categories/categories";
import { computed } from "vue";
import {IExpenseCategory} from "@/stores/categories/IExpenseCategory";

const props = defineProps<{
  categories?: number[];
}>();

const categoriesStore = useCategoriesStore();

const currentCategories = computed<IExpenseCategory[]>(() =>
  categoriesStore.items.filter((category) =>
    props.categories?.includes(category.id)
  )
);
</script>

<style module lang="scss">
.el {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.category {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 12px 3px 6px;
  border-radius: 16px;
  background: white;
  user-select: none;
}

.color {
  background: var(--color, lightgrey);
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
