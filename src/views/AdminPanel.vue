<script setup>
import AdminPanelHeader from '../components/AdminPanel/AdminPanelHeader.vue'
import DropdownOptionComponent from '../components/AdminPanel/DropdownOptionComponent.vue';
import CategoryModalComponent from '../components/AdminPanel/CategoryModalComponent.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <AdminPanelHeader/>
    <div class="px-6 py-8 bg-white w-full h-full grid"> 
        <div class="grid grid-cols-3 gap-4">
            <section class="col-span-3 md:col-span-2">
                <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <form action="">
                        <div class="mb-6">
                            <label for="title">
                                <h5 class="text-black">Title</h5>
                            </label>
                            <input type="text" name="title" id="title" placeholder="Short sleeve t-shirt"
                            class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                        </div>

                        <div class="mb-6 h-full">
                            <label for="description">
                                <h5 class="text-black">Description</h5>
                            </label>
                            <QuillEditor :options="options" theme="snow" class="border text-sm text-[#6D7175] h-40"/>
                        </div>
                    </form>
                </div>
            </section>

            <section class="col-span-3 md:col-span-1">
                <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <form action="">
                        <h5 class="text-black text-xl mb-5 font-semibold">
                            Product Organization
                            <span>
                                <button data-tooltip-target="tooltip-default" type="button" class="text-black bg-transparent focus:outline-none font-medium rounded-lg text-sm text-center">
                                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                </button>
                                <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Lorem Ipsum Dolor Sit Amet
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </span>
                        </h5>
                        <div class="mb-6">
                            <label for="categories">
                                <h5 class="text-black">Product Category</h5>
                            </label>
                            <DropdownOptionComponent :categories="categories" @selectedCategory="selectedCategory($event)" @modalEventCategory="openModal()"/>
                        </div>
                        <div class="mb-6">
                            <label for="product_brand">
                                <h5 class="text-black">Product Brand</h5>
                            </label>
                            <input type="text" name="product_brand" id="product_brand" placeholder="e.g., T-Shirt"
                            class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="mb-6">
                            <label for="collections">
                                <h5 class="text-black">Collections</h5>
                            </label>
                            <input type="text" name="collections" id="collections"
                            class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between">
                                <label for="title">
                                    <h5 class="text-black">Tags</h5>
                                </label>
                                <a href="#" class="text-blue-600">Manage</a>
                            </div>

                            <input type="text" name="title" id="title" placeholder="Find or create tags"
                            class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                    </form>
                </div>
            </section>

            <section class="col-span-3 md:col-span-2 mt-12">
                <InventoryComponent/>
            </section>
        </div>
    </div>

    <CategoryModalComponent :showModal="showModal" @refreshData="getCategories()"/>
</template>

<script>
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import axios from 'axios'
    import InventoryComponent from '../components/AdminPanel/InventoryComponent.vue';


    export default {
        components: {
            QuillEditor,
        },

        data(){
            return{
                categories: [],
                showModal: false,
                options:{
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                            ['blockquote', 'code-block'],

                            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'script': 'sub'}, { 'script': 'super' }, 'image', 'link'],      // superscript/subscript
                            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                            [{ 'direction': 'rtl' }],                         // text direction

                            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                            [{ 'font': [] }],
                            [{ 'align': [] }],

                            ['clean']    
                        ]                                     // remove formatting button
                    },
                }
            }
        },

        created: function(){
            this.getCategories();
        },

        methods: {
            async getCategories() {
                await axios.get('https://summo.id/api/category').then((response) => {
                    this.categories = response.data.data;
                }).catch((err)=>{
                    console.log(err);
                });
            },

            logData(){
                console.log('data');
            },
            selectedCategory(ev){
                console.log('Parent Component: '+ ev.name)
            },

            openModal(){
                // console.log(this.$refs)
                this.showModal = !this.showModal;
                console.log('showmodal')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>