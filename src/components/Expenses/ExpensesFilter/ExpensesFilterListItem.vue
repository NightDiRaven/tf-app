<template>
  <li>
    <router-link :to="link.route" :class="[$style.link, { [$style.active]: link.isActive }]">
      {{ category.title }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { IExpenseCategory } from "@/stores/categories/IExpenseCategory";
import { computed } from "vue";
import { getToggleQuery } from "@/utils/getToggleQuery";

const props = defineProps<{
  category: IExpenseCategory;
}>();

const router = useRouter();
const route = useRoute();

const link = computed(() => {
  const { isActive, query } = getToggleQuery(
    route.query,
    "categories",
    `${props.category.id}`
  );
  return { isActive, route: router.resolve({ path: route.path, query }) };
});
</script>

<style module lang="scss">
.link {
  padding: 10px 20px;
  display: block;
  text-decoration: none;
  border: 2px solid;
  border-radius: 20px;
  color: #c3c3c3;
  transition: 0.2s color ease-in-out ;
}

.active {
  color: black;
}
</style>
