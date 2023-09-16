<script setup>
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
const isShowModal = ref(false)
function closeModal() {
isShowModal.value = false
}
function showModal_() {
isShowModal.value = true
}
</script>
<template>
    <button @click="showModal_" type="button" class="hidden"  ref="showModal">
        Show modal
    </button>
    <!-- Modal -->
    <Modal size="5xl" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          Terms of Service
        </div>
      </template>
      <template #body>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <button @click="closeModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Decline
          </button>
          <button @click="closeModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I accept
          </button>
        </div>
      </template>
    </Modal>
</template>

<script>
    export default {
        props: ['showModal'],
        watch: { 
          showModal: function(newVal, oldVal) {
            this.showModal_();
          }
        },
          
        methods: {
          showModal_(){
            this.$refs.showModal.click();
          }
        },

        mounted () {
          
        },
        beforeCreate(){

        },
    }
</script>

<style lang="scss" scoped>

</style>