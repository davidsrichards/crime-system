<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col"
    >
      <h1 class="text-2xl font-bold mb-6 text-center">User SignIn</h1>
      <span class="w-full mx-auto text-center text-red-500">{{
        errorMessage
      }}</span>
      <form @submit.prevent="handleSubmit()">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            v-model="username"
            id="username"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              id="password"
              :type="!showPass ? 'password' : 'text'"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <div
              v-if="!showPass"
              class="text-blue-500 cursor-pointer absolute top-2 right-6"
              @click="showPass = !showPass"
            >
              <font-awesome-icon icon="eye" size="1x" />
            </div>
            <div
              v-else
              class="text-blue-500 cursor-pointer absolute top-2 right-6"
              @click="showPass = !showPass"
            >
              <font-awesome-icon icon="eye-slash" size="1x" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1 w-full"
        >
          <Animation v-if="isLoading" />
          <span v-else>Sign In</span>
        </button>

        <div class="flex items-center justify-between mt-2">
          <router-link
            class="underline underline-offset-2 italic"
            to="/admin-signin"
            >Admin</router-link
          >
          <router-link
            class="underline underline-offset-2 italic"
            to="/user-signup"
            >SignUp</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import api from "../../../../api";
import Animation from "../../Animation/Animation.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const showPass = ref(false);
const route = useRouter();

// submit
const handleSubmit = async () => {
  if (!username.value || !password.value) return;
  isLoading.value = true;

  try {
    const { data } = await api.post("/user/login", {
      username: username.value,
      password: password.value,
    });
    if (data) {
      route.push("/user-dashboard");
      const {username, _id} = data
      localStorage.setItem("username", username);
      localStorage.setItem("userId", _id);
    }
  } catch (error) {
    console.log(error.response.status)
    switch (error.response.status) {
      case 404:
        errorMessage.value = "Invalid Credentials";
        break;
      case 500:
        errorMessage.value = "Server Error";
        break;
      case 401:
        errorMessage.value = "Not Authorize";
        break;
      default:
        errorMessage.value = "An Error Occur";
        break;
    }
    return error;
  } finally {
    isLoading.value = false;
  }
};
</script>
<style lang="">
</style>