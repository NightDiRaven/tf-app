<template>
  <BaseModal :isOpen="modelValue" @close="close">
    <div :class="$style.el">
      <div :class="$style.formElement">
        <label>
          <span>Название расхода</span>
          <input v-model="newExpense.title" />
        </label>
      </div>
      <div :class="$style.formElement">
        <label>
          <span>Описание расхода</span>
          <textarea v-model="newExpense.description" />
        </label>
      </div>
      <div :class="$style.formElement">
        <label>
          <span>Категория расхода</span><br/>
            <select multiple v-model="newExpense.categories">
                <option v-for="category in categoriesStore.items" :key="category.id" :value="category.id">{{category.title}}</option>
            </select>
        </label>
      </div>
      <div :class="$style.formElement">
        <label>
          <span>Сколько было потрачено</span>
          <input v-model="newExpense.total" />
        </label>
      </div>
      <BaseButton @click="add">Добавить</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/Base/BaseModal.vue";
import { ref, watch } from "vue";
import { useExpensesStore } from "@/stores/expenses/expenses";
import BaseButton from "@/components/Base/BaseButton.vue";
import { IExpense } from "@/stores/expenses/IExpense";
import {useCategoriesStore} from "@/stores/categories/categories";

const props = defineProps<{
  modelValue: boolean;
  close: () => void;
}>();

const expensesStore = useExpensesStore();
const categoriesStore = useCategoriesStore();

const newExpense = ref({});

const reset = () => {
  newExpense.value = expensesStore.getEmpty();
};

const add = () => {
  expensesStore.add(newExpense.value as IExpense);
  props.close();
};

watch(
  () => props.modelValue,
  () => {
    reset();
  }
);
</script>

<style module lang="scss">
.el {
 margin: auto;

}

.formElement {
  margin-bottom: 20px;
  max-width: 100%;
  width: 300px;
  text-align: left;
}
</style>
