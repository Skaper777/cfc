<template>
  <div>Index</div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware: "auth",
// });
onMounted(() => async () => {
  await useSupabaseUser();
});
</script>
