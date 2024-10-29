<template>
    <Link class="flex items-center hover:bg-[#1b1b29] px-3">
      <router-link :to="to" class="flex items-center gap-3 sidebar-menu p-2 text-slate-400 font-semibold  w-full">
        <div class="text-blue-500">
    <font-awesome-icon :icon="ic" size="1x" />
  </div>
        <li class="p-2">{{ title }}</li>
      </router-link>
      <!--  -->
    </Link>
</template>
<script >
  export default{
   props: {
    title: String,
    to: String,
    ic: Object,
   }
  }

</script>
<style lang="">
    
</style>