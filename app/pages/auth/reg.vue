<template>
  <div>
    <label for="email">
      Email:
      <input v-model="email" type="email" name="email" />
    </label>
    <label for="password">
      Password:
      <input v-model="password" type="password" name="password" />
    </label>
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

async function signUp() {
  try {
    await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    navigateTo("/auth/confirm");
  } catch (error) {
    console.error(error);
  }
}
</script>
