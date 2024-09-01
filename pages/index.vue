<template>
  <div class="max-w-xl p-4 mx-auto">
    <NuxtLink to="/test">Go to Test</NuxtLink>
    <BaseThemeToggle class="mb-10" />
    <BasePagination
      :item-per-page="8"
      :total-items="512"
      :current-page="currentPage"
      :max-links-displayed="5"
      rounded="none"
    />
    <h1>This is testing mode</h1>

    <button class="bg-green-400 px-4 py-2 rounded-md">Wow</button>
    <div class="card w-44 h-44 bg-white dark:bg-gray-700"></div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1;
  } catch {
    return 1;
  }
});
</script>
