<template>
    <div class="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">Crime Details</h1>
      
      <div class="mb-4 flex items-center gap-2">
        <label class="block text-gray-700 text-sm font-bold">Street:</label>
        <p>{{ address?.street }}</p>
      </div>
      
      <div class="mb-4 flex items-center gap-2">
        <label class="text-gray-700 text-sm font-bold">City:</label>
        <p>{{ address?.city }}</p>
      </div>
      
      <div class="mb-4 flex items-center gap-2">
        <label class="block text-gray-700 text-sm font-bold">State:</label>
        <p>{{ address?.state }}</p>
      </div>
      
      <div class="mb-4 flex items-center gap-2">
        <label class="block text-gray-700 text-sm font-bold">Contact:</label>
        <p>{{ contact }}</p>
      </div>
      
      <div class="mb-4 flex  gap-2">
        <label class="block text-gray-700 text-sm font-bold">Description:</label>
        <p>{{ description }}</p>
      </div>
      
        <router-link to="crime" class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Back
        </router-link>
 
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import {useRoute} from 'vue-router'
import axios from 'axios';
  const token = localStorage.getItem('token');
  
  const address = ref({street: "", city: "", state: ""});
  const description = ref("");
  const contact = ref("");
  const route = useRoute()
  const crimeId = ref(route.query.crimeId)


  // get information

  const getInformation = async (crimeId) =>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/admin/get-crime-byId/${crimeId}`, {headers: {Authorization: `Bearer ${token}`}})
        if(data){
            console.log(data.address.street)
            address.value.street = data.address.street
            address.value.city = data.address.city
            address.value.state = data.address.state
            contact.value = data.contact 
            description.value = data.description
        }
    } catch (error) {
        return error
        
    }
  }

  onMounted (() =>{
   if(crimeId.value){
    getInformation(crimeId.value)

   }
  })
  </script>
  
  <style scoped>

  </style>
  