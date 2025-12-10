<template>
  <ClientOnly><CfcInput v-model="t" /></ClientOnly>
</template>

<script setup lang="ts">
import { CfcInput } from "ui-library";

const t = ref("");
</script>
