<template>
  <form @submit.prevent="sendReport()"
    class="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md report-container space-y-4"
  >
    <h1 class="text-3xl font-bold mb-4 pb-2">Add New Crime</h1>
    <div>
      <h2 class="text-xl font-semibold">Crime Address</h2>
      <input type="text" placeholder="street" class="border p-2" v-model="address.street"/>
      <input type="text" placeholder="city" v-model="address.city"/>
      <input type="text" placeholder="state" v-model="address.state"/>
    </div>

    <div>
      <h2 class="text-xl font-semibold pb-2">Crime Description</h2>
      <textarea v-model="description"
        class="w-full border text outline-none focus:ring-1 rounded-md px-2"
        placeholder="enter crime description"
      ></textarea>
    </div>

    <div>
      <h2 class="text-xl font-semibold pb-2">Reporters Contact</h2>
      <input  v-model="contact" type="text" placeholder="Contact" />
    </div>
    <div>
      <button type="submit"
        class="bg-blue-400 w-full p-2 rounded-md text-xl text-white shadow-md"
      >
        Generate
      </button>
    </div>
  </form>
</template>
<script>
import api from '../../../../../api';
export default {
  data() {
    return {
      address: {
        street: "",
        city: "",
        state: "",
      },
      description: "",
      contact: ""
    };
  },

  methods: {
    async sendReport() {
      const username = localStorage.getItem('user-name')
        try {
          const {data} = await api.post(`/user/report?username=${username}`, {address: this.address, description: this.description, contact: this.contact})
          if(data){
            console.log(data)
          }
        } catch (error) {
          console.log(error)
          return error
        }
    },
  },

};
</script>


<style>
.report-container input {
  @apply border p-2 rounded-md w-full mb-2 outline-none focus:ring-1;
}
</style>