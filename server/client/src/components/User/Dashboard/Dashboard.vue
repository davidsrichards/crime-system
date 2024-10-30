<template>
    <div class="w-full">
       <Sidebar/>
      <div class="flex-1 md:ml-64">
         <Navbar/>
      </div>
      <div class="mt-24 p-4  flex items-center justify-center md:ml-64 ">
         <router-view></router-view>
      </div>
    </div>
</template>
<script setup>
import Navbar from "./UserNavbar/UserNavbar.vue"
import Sidebar from "./UserSidebar/UserSidebar.vue"
 
</script>
<style>


</style>