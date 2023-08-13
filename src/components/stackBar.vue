<script setup>
import { onMounted } from 'vue'
import Chart from "chart.js/auto"




const generateChart = () => {

    const data = {
        labels: ["<  1", "1 - 2", "3 - 4", "5 - 9", "10 - 14", "15 - 19", "20 - 24", "25 - 29", "> - 29"],
        datasets: [{
            label: 'Employee',
            backgroundColor: "#caf270",
            data: [-12, 59, -5, 56, 58, 12, -59, -87, 45],
        }, {
            label: 'Engineer',
            backgroundColor: "#45c490",
            data: [12, -59, 5, -56, 58, 12, 59, 85, 23],
        }, {
            label: 'Government',
            backgroundColor: "#008d93",
            data: [12, -59, 5, 56, 58, 12, 59, 65, 51],
        }, {
            label: 'Political parties',
            backgroundColor: "#2e5468",
            data: [-12, -59, -5, -56, 58, 12, 59, 12, 74],
        }],
    };


    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked'
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    }

    new Chart(document.getElementById('stackBar'), config
    )
}


onMounted(() => {
    generateChart();
})



</script>

<template >
    
    <canvas id="stackBar" >
        
    </canvas>
</template>

<style >
    
</style>