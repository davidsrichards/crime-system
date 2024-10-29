<template>
    <div class="h-screen flex-1 md:w-64 w-0 fixed transition-al top-0 duration-300 ease-in-out overflow-auto bg-black text-[#fff] py-8">
        <ul>
            <GlobalSidebar title="Manage Members" to="/admin-dashboard/members" ic="user"/>
            <GlobalSidebar title="Manage Crime" to="/admin-dashboard/crime" ic="people-robbery"/>
            <GlobalSidebar title="Manage News" ic="newspaper"/>
            <GlobalSidebar title="Manage Enquiries" ic="newspaper"/>
            <GlobalSidebar title="Manage Feedback" ic="newspaper"/>
            <GlobalSidebar title="Log Out" to="/" ic="sign-out"/>
        </ul>
    </div>
</template>
<script setup>
import GlobalSidebar from '../../../Global-Component/Global-Sidebar.vue';
</script>
<style>
</style>  