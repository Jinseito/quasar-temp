<script setup>



const columns = [{ label: 'PickUpDate', field: 'pud' }, { label: 'BookingID', field: 'bid' }, { label: 'Status', field: 'status' }, { label: 'Type', field: 'type' }, { label: 'CustomerName' , field: 'customer_name' }, { label: 'PickUpPlace', field: 'pup' }]

const rows = [{ pud: '2023-01-01' ,  bid: '110223' ,  status: 'approved' ,  type: '' , customer_name: 'CustomerName' , pup :'2023-01-01'}]

</script>

<template>
    <div class="q-pa-md">
        <q-table  :rows="rows" :columns="columns" row-key="name" />
    </div>
</template>

<style >
    
</style>