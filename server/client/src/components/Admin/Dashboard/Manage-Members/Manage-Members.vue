<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-4">
        <GlobalUsers v-for="(user, index) in users" :key="index" :username="user?.username" :age="calculateAge(user?.age)" @on-delete="deleteSingleUser(index)" :image="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSz3KsuXsoJtIOiOpLCJHktiDQZ03pXQvqg&s'"/>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import GlobalUsers from '../../../Global-Component/Global-Users/Global-Users.vue';
import api from '../../../../../api';
const users = ref([]) 
const token = localStorage.getItem('token')



// delet single user

const deleteSingleUser = async (index) =>{
   const userId = users.value[index]._id

   try {
    const {data} = await api.delete(`/admin/delete/${userId}`, {headers: {Authorization: `Bearer ${token}`}})
    if(data){
   users.value =  users.value.filter((_,  i) => i !== index)   
    }
   } catch (error) {
    return error

   }
}


// calculate age

const calculateAge = (year) =>{
    const getYear = year.split("-")[0];
    const age = new Date().getFullYear() - getYear + ' years Old'
    return age
    
}

 onMounted( async() =>{
    const token = localStorage.getItem('token');
    try {
        const {data} = await api.get(`/admin/all-users`,{headers: {Authorization: `Bearer ${token}`}})
       if(data){
        users.value = data
       }
    } catch (error) {
        return error;
        
    }

 })



 
 

</script>
<style lang="">
    
</style>