<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-4">
        <GlobalUsers v-for="(user, index) in users" :key="index" :username="user?.username" :age="calculateAge(user?.age)" :image="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSz3KsuXsoJtIOiOpLCJHktiDQZ03pXQvqg&s'"/>
    </div>
</template>
<script setup>
 import axios from 'axios';
import { onMounted, ref } from 'vue';
import GlobalUsers from '../../../Global-Component/Global-Users/Global-Users.vue';
const users = ref([]) 



// calculate age

const calculateAge = (year) =>{
    const getYear = year.split("-")[0];
    const age = new Date().getFullYear() - getYear + ' years Old'
    return age
    
}

 onMounted( async() =>{
    const token = localStorage.getItem('token');
    try {
        const {data} = await axios.get(`http://localhost:4000/api/admin/all-users`,{headers: {Authorization: `Bearer ${token}`}})
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