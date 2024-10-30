<template>
    <div class="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">Crime Management System</h1>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Street</label>
        <p>{{ street }}</p>
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">City</label>
        <p>{{ city }}</p>
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">State</label>
        <p>{{ state }}</p>
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Contact</label>
        <p>{{ contact }}</p>
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <p>{{ description }}</p>
      </div>
      
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <icon-plus name="message" class="w-6 h-6 mr-2 inline-block" />
          Send Message
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import 'vue-icons-plus';
  
  const street = ref('123 Elm St');
  const city = ref('Springfield');
  const state = ref('IL');
  const contact = ref('(555) 123-4567');
  const description = ref('Description of the crime scene.');
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  