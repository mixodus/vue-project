<template>
<!-- Modal toggle -->
  <button ref="showModal" data-modal-target="addcategory_modal" data-modal-toggle="addcategory_modal" class="hidden" type="button">
    Toggle modal
  </button>

  <!-- Main modal -->
  <div id="addcategory_modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow">
              <!-- Modal header -->
              <div class="flex items-start justify-between p-4 rounded-t">
                  <h3 class="text-xl font-semibold text-black">
                      Add Category
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="addcategory_modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">  
                  <div class="mb-6">
                    <label for="category_name" class="block mb-2 text-sm font-medium text-red-600">Category Name*</label>
                    <input type="text" id="category_name" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New product category" v-model="name">
                    <span v-if="v$.name.$error" class="text-red-600 text-xs"> {{ v$.name.$errors[0].$message }} </span>
                  </div>
                  <div class="mb-6">
                    <label for="parent_category" class="block mb-2 text-sm font-medium text-red-600">Parent Category*</label>
                    <input type="text" id="parent_category" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Parent Category" v-model="parent_category">
                    <span v-if="v$.parent_category.$error" class="text-red-600 text-xs"> {{ v$.parent_category.$errors[0].$message }} </span>
                  </div>
                  <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-black">
                      Category Banner (200 x 200)
                      <span v-if="bannerAddURL">
                        <button class="px-2 hover:bg-blue-100 text-blue-600 rounded-lg underline mx-1" type="button" @click="toggleBannerURL()">Add From File</button>
                      </span>
                    </label>
                    <div v-if="!bannerAddURL" class="flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-500 border-dashed rounded-lg bg-white">
                            <div class="flex flex-row items-center justify-center pt-5 pb-3">
                                <button class="px-2 bg-[#E5EFFD] text-[#1F5199] rounded-lg mx-1 font-semibold" type="button">
                                  Add File
                                </button>
                                <button class="px-2 hover:bg-blue-100 text-[#2C6ECB] rounded-lg underline mx-1 font-semibold" type="button" @click="toggleBannerURL()">Add From URL</button>
                            </div>
                            <div class="flex flex-row items-center justify-center pb-6">
                              <p class="text-gray-600">Accepts images, videos, or 3D models</p>
                            </div>
                        </label>
                    </div> 
                    <div v-if="bannerAddURL" >
                      <input type="text" id="banner_url" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://adminpanel.com/path/to/source" v-model="banner">
                    </div>
                  </div>
                  <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-black">
                      Category Icon (32 x 32)
                      <span v-if="iconAddURL">
                        <button class="px-2 hover:bg-blue-100 text-blue-600 rounded-lg underline mx-1" type="button" @click="toggleIconURL()">Add From File</button>
                      </span>
                    </label>
                    <div v-if="!iconAddURL" class="flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-500 border-dashed rounded-lg bg-white">
                            <div class="flex flex-row items-center justify-center pt-5 pb-3">
                                <button class="px-2 bg-[#E5EFFD] text-[#1F5199] rounded-lg mx-1 font-semibold" type="button">
                                  Add File
                                </button>
                                <button class="px-2 hover:bg-blue-100 text-[#2C6ECB] rounded-lg underline mx-1 font-semibold" type="button" @click="toggleIconURL()">Add From URL</button>
                            </div>
                            <div class="flex flex-row items-center justify-center pb-6">
                              <p class="text-gray-600">Accepts images, videos, or 3D models</p>
                            </div>
                        </label>
                    </div> 
                    <div v-if="iconAddURL" >
                      <input type="text" id="icon_url" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://adminpanel.com/path/to/source" v-model="icon">
                    </div>
                  </div>
                  <div class="flex justify-end items-center p-6 pb-0 space-x-2 rounded-b">
                      <button data-modal-hide="addcategory_modal" type="button" class="mx-1 bg-transparent text-black py-2 px-4 border border-white-500 hover:border-transparent rounded cursor-pointer">Cancel</button>
                      <button @click="submitForm()" class="mx-1 bg-[#008060] hover:bg-[#018c69] text-white py-2 px-4 rounded cursor-pointer">
                        <!-- <svg v-if="button_wording == 'Sending...'" class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg> -->
                        {{button_wording}}
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Modal } from 'flowbite'
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
    export default {
      data(){
        return{
          button_wording: 'Save',
          v$: useValidate(),
          name: '',
          parent_category: '',
          banner:'',
          icon: '',
          bannerAddURL:false,
          iconAddURL:false,
        }
      },
      components:{
        Modal
      },
      props: ['showModal'],
      watch: { 
        showModal: function(newVal, oldVal) {
          this.showModal_();
        }
      },

      validations(){
        return{
          name: { required },
          parent_category: { required },
          banner: {},
          icon: {},
        }
      },
        
      methods: {
        showModal_(){
          this.$refs.showModal.click();
        },
        toggleBannerURL(){
          this.bannerAddURL = !this.bannerAddURL;
        },
        toggleIconURL(){
          this.iconAddURL = !this.iconAddURL;
        },
        submitForm(){
          this.button_wording = 'Sending...'
          this.v$.$validate();
          if(!this.v$.$error){
            let data = {
              name: this.name,
              parent_category: this.parent_category,
              banner: this.banner,
              icon: this.icon
            }
            let url = "https://summo.id/api/category";

            this.postApi(url, data, (res) => {
              console.log(res);
              this.name = ''
              this.parent_category = ''
              this.banner = ''
              this.icon = ''
              this.$emit('refreshData');
              this.$refs.showModal.click();
            })
          } else {
            this.button_wording = 'Save'
          }
        },
        //should be on services
        async postApi(url, postData, callback){
          await axios.post(url, postData).then((response) => {
              callback(response);
          }).catch((err)=>{
              console.log(err);
          });
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>