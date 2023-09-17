<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div class="flex">
        <button id="states-button" data-dropdown-toggle="dropdown-states" class="w-full rounded-lg text-center text-black border border-black py-2 capitalize" type="button">
            {{ selected.name }}
        </button>  
        <div id="dropdown-states" class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-72 max-h-56 overflow-y-scroll">
            <ul class="text-black">
                <li v-for="category of categories">
                    <button type="button" v-on:click="select(category)" class="w-full text-left text-black py-2 hover:bg-gray-100 capitalize">
                        <p class="mx-3">{{category.name}}</p>
                    </button>
                </li>
                <li>
                    <button @click="sendModalEvent()" type="button" class=" w-full text-left py-2 hover:bg-gray-100 capitalize">
                        <p class="text-blue-600 mx-2">Add new categories</p>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['categories'],

        data(){
            return{
                selected: {
                    name: 'Search product categories'
                },
            }
        },

        methods: {
            select(category){
                this.selected.name = category.name;
                this.$emit('selectedCategory', category);
            },  
            
            sendModalEvent(){
                this.$emit('modalEventCategory');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>