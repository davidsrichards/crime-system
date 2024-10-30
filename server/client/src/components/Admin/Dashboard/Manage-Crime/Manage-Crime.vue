<template>
  <div className="w-full">
    <div className="bg-[#fff] w-full p-4 flex items-center md:justify-between flex-wrap gap-4">
      <div>
        <input
        v-model="inputSearch"
          type="text"
          placeholder="Search State"
          className="bg-primary p-1 rounded-l-md outline-none focus:ring-1 focus:ring-blue-400 border focus:outline-none"
        />
        <button @click="handleInputSearch()" className="bg-blue-400 p-[5.3px] rounded-r-md">Search</button>
      </div>
    </div>

    <div className="w-full flex items-center justify-center mt-4 relative">
      <table class="w-full bg-[#fff]">
        <thead class="border-2 mt-12">
          <tr class=" font-semibold">
            <td class="pb-4 pt-4 px-4">Date</td>
            <td class="pb-4 pt-4 px-4">State</td>
            <td class="pb-4 pt-4 px-4">City</td>
            <td class="pb-4 pt-4 px-4">Street</td>
            <td class="pb-4 pt-4 px-4">Contact</td>
    
          </tr>
        </thead>
        <tbody>
          
    
         <tr v-for="(crime, index) in crimes" :key="index">
          <td class="border-b-2 px-4 pb-2 text-slate-500">{{ crime?.createdAt.slice(0, crime?.createdAt.indexOf('T'))}}</td>
          <td class="border-b-2 px-4 pb-2 text-slate-500">{{ crime?.address?.state}}</td>
          <td class="border-b-2 px-4 pb-2 text-slate-500">{{ crime?.address?.city}}</td>
          <td class="border-b-2 px-4 pb-2 text-slate-500">{{ crime?.address?.street}}</td>
          <td class="border-b-2 px-4 pb-2 text-slate-500">{{ crime?.contact}}</td>
          <div class="text-blue-500 border-b-2 px-4 pb-2 relative top-[1.7px] cursor-pointer" @click="getSingleCrime(index)">
    <font-awesome-icon icon="street-view" size="1x" />
  </div>
         </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import api from '../../../../../api';
import { computed, onMounted, ref, watch } from 'vue';
import {useRouter} from 'vue-router'
const crimes = ref([])
const inputSearch = ref("")
const selected = ref("")
const router = useRouter()
const options = ref([])


// hanlde input searchaStreetView

const handleInputSearch = async () =>{
  if(inputSearch && crimes){
   const filteredCrime = crimes.value.filter((crime) => crime.address.state.lastIndexOf(inputSearch.value) !== -1);
    if(filteredCrime.length > 0){
      crimes.value = filteredCrime
    }
    
  }
}

// get single crime

const getSingleCrime = async (index) =>{
 const getSingle =  crimes.value.find((_, id) => index === id);
 if(getSingle){
  router.push({ path: '/admin-dashboard/crime-details', query: { crimeId: getSingle._id } });

 }
}

//


onMounted(async() =>{
  try {
    const token = localStorage.getItem('token')
    const {data} = await api.get("/admin/get-all-crime", {headers: {Authorization: `Bearer ${token}`}});
   if(data){
    crimes.value = data
   }
  } catch (error) {
    return error
  }

})



</script>
<style lang="">
</style>