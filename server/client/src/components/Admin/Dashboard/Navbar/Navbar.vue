<template>
  <nav class="fixed top-0 bg-[#fff] h-16 flex items-center w-full shadow z-10">
    <h1 class="ml-4 font-bold shadow-md p-2">{{ username }}</h1>
    <div
      class="md:hidden block absolute left-4 hover:bg-[#e8eff9] p-2 rounded-full cursor-pointer"
    ></div>
    <div
      class="flex absolute md:right-72 right-6 gap-8 p-2 items-center justify-center"
    >
      <div class="text-blue-500 relative">
        <font-awesome-icon icon="envelope" size="2x" />
        <span class="ml-2 absolute bg-red-500 w-6 h-6 flex items-center justify-center -top-2 rounded-full -right-3 text-white">2</span>
      </div>
      <div class="relative p-4">
        <!--  -->
        <IconName />
      </div>
      <div class="relative p-4">
        <div class="text-red-500 relative">
          <font-awesome-icon icon="bell" size="2x" />
          <span class="ml-2 absolute bg-blue-500 w-6 h-6 flex items-center justify-center -top-3 rounded-full -right-2 text-white">1</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import api from "../../../../../api";

// getting token from the local storage
const token = localStorage.getItem("token");
const username = ref("");
const getUsername = async () => {
  try {
    const { data } = await api.get(`/admin/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data) {
      username.value = data[0]?.username;
    }
  } catch (error) {
    return error;
  }
};

onMounted(() => {
  getUsername();
});
</script>
<style>
.nav-img {
  width: calc(255px - 130px);
  max-width: 100%;
  height: 34px;
  margin: auto;
  vertical-align: middle;
}
</style>



