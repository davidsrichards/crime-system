<template>
    <div class="h-screen flex-1 md:w-64 w-0 fixed transition-al top-0 duration-300 ease-in-out overflow-auto bg-black text-[#fff] py-8">
        <ul>
            <GlobalSidebar title="Add Crime" to="/user-dashboard/crime"/>
            <GlobalSidebar title="Manage Crime"/>
            <GlobalSidebar title="Manage Enquiries"/>
            <GlobalSidebar title="Manage Feedback"/>
            <GlobalSidebar title="Profile" to="/user-dashboard/profile"/>
            <GlobalSidebar title="Log Out" to="/"/>
        </ul>
    </div>
</template>
<script setup>
import GlobalSidebar from '../../../Global-Component/Global-Sidebar.vue';
</script>
<style lang="">
    
</style>  