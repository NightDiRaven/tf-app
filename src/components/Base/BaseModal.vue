<template>
  <div :class="[$style.el, { [$style.open]: isOpen }]">
    <div :class="$style.modal">
      <BaseButton @click="close" :class="$style.closeButton">Назад</BaseButton>
      <div>
        <slot :close="close" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/Base/BaseButton.vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => emit("close");
</script>

<style module lang="scss">
.el {
  padding: 5px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  display: none;
}

.open {
  display: block;
}

.closeButton {
  position: fixed;
  top: 30px;
  right: 40px

}

.modal {
  padding: 20px;
  background: white;
}
</style>
