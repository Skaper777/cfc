<template>
  <div>
    <button @click="signInWithOtp">Sign In with E-Mail</button>
    <input v-model="email" type="email" />
    <input v-model="password" type="password" />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

const signInWithOtp = async () => {
  try {
    const res = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (!res.error) navigateTo("/auth/confirm");
  } catch (error) {
    console.error(error);
  }
};
</script>
