<template>
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div>
            <h5 class="text-black font-semibold text-xl">Inventory</h5>
        </div>
        <div class="flex items-center mt-8 pt-3 border-t-2">
            <input id="default-checkbox" type="checkbox" :value="checkTrackQuantity" v-model="checkTrackQuantity" @change="checkChanges($event, 'track')" class="w-4 h-4 text-[#2C6ECB] bg-gray-100 rounded focus:border-transparent">
            <label for="default-checkbox" class="ml-2 text-sm text-black">Track Quantity</label>
        </div>

        <div>
            <div class="mt-5">
                <div class="flex justify-between items-start">
                    <label for="number" class="text-black text-md font-semibold">Quantity</label>
                    <h5  v-if="checkTrackQuantity == 'false'" class="text-gray-500">Not Tracked</h5>
                    <input  v-if="checkTrackQuantity == 'true'" type="number" id="number" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                </div>
            </div>
            <div class="mt-5"  v-if="checkTrackQuantity == 'true'">
                <div class="flex justify-between items-start">
                    <label for="number" class="text-black text-md font-semibold">Low Quantity Warning</label>
                    <input type="number" id="number" class="border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                </div>
            </div>
        </div>

        <div class="flex items-center mt-8 pt-3 border-t-2">
            <input id="default-checkbox" type="checkbox" :value="checkProductLabel" v-model="checkProductLabel" @change="checkChanges($event, 'product')"  class="w-4 h-4 text-[#2C6ECB] bg-gray-100 rounded focus:border-transparent">
            <label for="default-checkbox" class="ml-2 text-sm text-black">This product has SKU or Barcode</label>
        </div>

        <div v-if="checkProductLabel == 'true'"> 
            <div class="flex justify-center items-center w-full mt-5">
                <div class="w-full mx-1">
                    <label for="product_brand">
                        <h5 class="text-black">SKU (Stock Keeping Unit)</h5>
                    </label>
                    <input type="text" name="product_brand" id="product_brand" placeholder=""
                    class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="w-full mx-1">
                    <label for="product_brand">
                        <h5 class="text-black">Barcode (ISBN, UPC, GTIN, etc.)</h5>
                    </label>
                    <input type="text" name="product_brand" id="product_brand" placeholder=""
                    class= "border border-[#6D7175] text-sm text-[#6D7175] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                checkTrackQuantity: 'false',
                checkProductLabel: 'false'
            }
        },

        methods:{
            checkChanges(ev, whichCheckBox){
                if(whichCheckBox == 'track'){
                    this.checkTrackQuantity = ev.target.value
                } else {
                    this.checkProductLabel = ev.target.value
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>