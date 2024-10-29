<template>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin SignIn</h1>
        <form @submit.prevent="handleSubmit()">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
            v-model="username"
              id="username"
              type="text"
            
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            v-model="password"
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <router-link to="/" class="underline underline-offset-2 italic">User</router-link>
         
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
    await axios.post('http://localhost:4000/api/admin/login', {username: this.username, password: this.password}).then((response) => {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
      this.$router.push('/admin-dashboard')
 
    }).catch((err) => {
        console.log(err)
          return err
        })
    }
    }
     
    
}
</script>
<style lang="">
    
</style>