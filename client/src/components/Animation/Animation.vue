<template>
    <div class="flex justify-center items-center">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10 mb-4"></div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
.loader {
  border-top-color: #3498db;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>