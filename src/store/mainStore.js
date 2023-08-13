import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        data: 'test from store'
    })
})