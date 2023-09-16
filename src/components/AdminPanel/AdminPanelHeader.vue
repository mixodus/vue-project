<template>
    <div class="flex justify-center bg-black"> 
        <div class="w-full h-auto grid grid-cols-2 px-5 py-2 max-w-8xl">
            <div class="flex justify-start items-center">
                <h5 class="font-bold text-white">Unsaved Product</h5>
            </div>
            <div class="flex justify-end align-center">
                <button class="mx-1 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                    Discard
                </button>
                <button class="mx-1 bg-[#008060] hover:bg-[#018c69] text-white py-2 px-4 rounded">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>