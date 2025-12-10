<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
// const test = ref("");

onMounted(() => async () => {
  await useSupabaseUser();
});
</script>

<style lang="scss">
h1 {
  color: var(--color-primary);
  font-family: var(--font-family-mtsans);
}
</style>
