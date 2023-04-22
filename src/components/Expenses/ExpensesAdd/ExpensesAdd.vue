<template>
    <div :class="$style.el">
        <BaseButton :class="$style.button" @click="open">
            Добавить новый расход
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/Base/BaseButton.vue";
import {useModal} from "vue-final-modal";
import ExpensesAddModal from "@/components/Expenses/ExpensesAdd/ExpensesAddModal.vue";

const { open, close} = useModal({
    component: ExpensesAddModal,
    attrs: {
        close() {
            close()
        },
    }
})
</script>

<style module lang="scss">
.el {
    text-align: center;
}
</style>
