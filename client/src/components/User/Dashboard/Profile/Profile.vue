<template>
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-lg shadow-md relative">
    <div className=" absolute right-4 top-2 hover:scale-125 cursor-pointer">
      <MdEdit />
      </div>
    <div className="flex items-center justify-center">
      <img className="w-24 h-24  user-img object-cover" :src="profile"  alt="User Profile" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold">David Richard</h2>
      <p className="text-gray-600">Agricultural Company</p>
      <p className="text-gray-600">Nsuk Main Gate</p>
    </div>
  </div>
</template>
<script setup>
import profile from '../../../../assets/Images/profile.jpg'

</script>
<style lang="">
    
</style>