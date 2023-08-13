<script setup>
// import { storeToRefs } from 'pinia';
// import { useMainStore } from '../store/mainStore';
import dataTable from '../components/dataTable.vue'
import stackBar from '../components/stackBar.vue';


// const store = useMainStore();

// const { data  } = storeToRefs(store) 

</script>

<template>
    <div>
        This Home page
        <!-- test Data from store : {{ data }}   -->
        <data-table></data-table>
        <stack-bar></stack-bar>
    </div>
</template>

<style>
    
</style>