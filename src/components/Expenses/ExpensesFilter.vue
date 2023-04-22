<template>
    <div :class="$style.el">
        <BaseButton>Категории</BaseButton>
        <BaseButton>Семья</BaseButton>
        <BaseButton>Дата</BaseButton>
    </div>
</template>

<script setup lang="ts">

import BaseButton from "@/components/Base/BaseButton.vue";
</script>

<style module lang="scss">
.el {
  padding: 20px;
  gap: 15px;
}
</style>
