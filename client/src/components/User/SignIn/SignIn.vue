<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">User SignIn</h1>
        <form @submit.prevent="handleSubmit()">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
          <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1 w-full"
            >
              Sign In
            </button>

          <div class="flex items-center justify-between mt-2">
            <router-link class="underline underline-offset-2 italic" to="/admin-signin">Admin</router-link>
            <router-link class="underline underline-offset-2 italic" to="/user-signup">SignUp</router-link>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data () {
        return {
          
            username: "",
            password: ""
            
        }
    },

    methods: {
   async handleSubmit  () {
  
 try {
    const {data} = await axios.post('http://localhost:4000/api/user/login', {username: this.username, password: this.password})
    if(data){
        this.$router.push('/user-dashboard')
        localStorage.setItem('user-name', data)
    }

 } catch (error) {
    console.log(error)
    return error
 }
    
    }
    }
     
    
}
</script>
<style lang="">
    
</style>