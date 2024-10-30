<template>
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-lg shadow-md relative">
    <div className=" absolute right-4 top-2 hover:scale-125 cursor-pointer">
      <div class="text-red-500" @click="$emit('on-delete')">
    <font-awesome-icon icon="delete-left" size="1x" />
  </div>
      </div>
    <div className="flex items-center justify-center">
      <img className="w-24 h-24  user-img object-cover" :src="profile"  alt="User Profile" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold">{{ username }}</h2>
      <p className="text-gray-600">{{age}}</p>
    </div>
  </div>
</template>
<script setup>
import profile from '../../../assets/Images/profile.jpg'


defineProps({
  username: String,
  age: String,
  image: String,
})

</script>
<style lang="">
    
</style>