<template>
  <h1>Index <CfcInput v-model="test" /></h1>
</template>

<script lang="ts" setup>
const test = ref("");

onMounted(() => async () => {
  await useSupabaseUser();
});
</script>

<style lang="scss">
h1 {
  color: var(--color-primary);
}
</style>
