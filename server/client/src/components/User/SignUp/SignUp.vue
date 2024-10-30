<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <form @submit.prevent="handleSignIn()">
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
          <input
            v-model="password"
            id="password"
            type="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            age
          </label>
          <input
            v-model="age"
            id="password"
            type="date"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your age"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          SignUp
        </button>
        <div class="flex items-center justify-between mt-2">
          <router-link
            to="/admin-signin"
            class="underline underline-offset-2 italic"
            >Admin</router-link
          >
          <router-link to="/" class="underline underline-offset-2 italic"
            >SignIn</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import api from "../../../../api";


export default {
    data () {
    return {
            username: "",
            password: "",
            age: ""
    }
},
  methods: {
    async handleSignIn() {
      try {
        const  {data}  = await api.post("/user/register", {username: this.username, password: this.password, age: this.age}
      );
      if(data){
        this.$router.push('/')
      }
      } catch (error) {
        console.log(error)
        return error
        
      }
    },
  },
};
</script>
<style lang="">
</style>