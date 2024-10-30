<template>
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-lg shadow-md relative">
    <div className=" absolute right-4 top-2 hover:scale-125 cursor-pointer">
      <MdEdit />
      </div>
    <div className="flex items-center justify-center flex-col">
      <img className="w-24 h-24  user-img object-cover" :src="profile"  alt="User Profile" />
      <div class="text-green-500">{{ message }}</div>
    </div>
    <div className="text-center mt-4 flex flex-col gap-2">
      <input v-model="newUser.username" type="text" class=" outline-none rounded-md border ring-1 px-2" >
      <input v-model="newUser.password"  type="text" placeholder="new password" class=" outline-none rounded-md border ring-1 px-2">
      <button @click="updateUser()" class="bg-blue-400 p-1 rounded-md text-white">Update</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, useId } from 'vue';
import profile from '../../../../assets/Images/profile.jpg'
import api from '../../../../../api';
const username = localStorage.getItem('username')
const userId = localStorage.getItem('userId')
const newUser = ref({username: "", password: ""})
const message = ref("")


 onMounted (async() =>{

  try {
    const {data} = await api.get(`/user/get-single/${userId}`);
    if(data){
     newUser.value.username = data?.username
    }
  } catch (error) {
    return error
  }

}) 

// sucess

const handleSuccess = async () =>{
 message.value = 'Update Successful';
 try {
   await new Promise(resolve => setTimeout(resolve, 2000))
 } catch (error) {
  message.value = 'Error'  
 }
 finally {
  message.value = ""
 }
}

// update user
const updateUser = async () =>{
  if(!newUser.value.username || !newUser.value.password) return;
  try {
    const {data} = await api.put(`/user/update/${userId}` , {username: newUser.value.username, password: newUser.value.password});
  } catch (error) {
    return error
  }
  finally {
    handleSuccess()
  }
}






</script>
<style lang="">
    
</style>