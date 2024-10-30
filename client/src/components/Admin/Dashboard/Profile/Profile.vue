<template>
  <div class="max-w-4xl flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
    <img :src="profile" alt="" class="profile mx-auto" />
    <div class="mx-auto text-green-500">{{successMessage}}</div>
    <input
      type="text"
      class="bg-gray-200 rounded-md px-1 outline-none p-1 focus:ring-1"
      placeholder="username"
      v-model="username"
    />
    <input
    v-model="password"
      type="text"
      class="bg-gray-200 rounded-md px-1 outline-none p-1 focus:ring-1"
      placeholder="password"
    />
    <button @click="updateAdmin()" class="bg-blue-400 text-white p-1 rounded-md">Update</button>
  </div>
</template>
<script setup>
import api from "../../../../../api";
import profile from "../../../../assets/Images/profile.jpg";
import { onMounted, ref } from "vue";
const username = ref("")
const password = ref("")
const id = ref("")
const successMessage = ref("")
const token = localStorage.getItem('token')

// call api

const getAdmin = async () => {
  try {
    const { data } = await api.get(`/admin/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
     username.value = data[0]?.username ?? ""
     id.value = data[0]?._id
  } catch (error) {
    return error;
  }
};
 onMounted (() =>{
    getAdmin()
 })


 // success message
 const handleSucess = async () => {
  successMessage.value = 'Update Successful';
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      successMessage.value = 'Error'
    } finally {
      successMessage.value = ""
    }
  };

 // update

 const updateAdmin = async () => {
   try {
    const {data} = await api.put(`/admin/update/${id.value}`,{username: username.value, password: password.value});
    if(data){
      handleSucess()
    }
   } catch (error) {
    return error
   }
 }






</script>
<style>
.profile {
  width: 100px;
  height: 100px;
}
</style>