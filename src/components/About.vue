<template>
    <section class="pt-10 pb-20 custom-bg">
        <div class="container mx-auto px-5 mb-5">
            <div class="text-5xl md:text-7xl md:mt-10 md:mb-5 flex flex-col items-center">
                <div>
                    <h1 class="md:whitespace-nowrap">WE MAKE <b class="ease-in-out duration-300 custom-tracking-3">WEBSITE</b>
                    </h1>
                    <h1>FOR YOU.</h1>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-5">
            <div class="mb-5 flex flex-col items-center">
                <div>
                    <p class="my-5 font-medium text-xl md:text-2xl text-center">
                        THIS IS TITLE
                    </p>
                    <p class="leading-7 text-center lg:w-2/3 m-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sapien vitae magna condimentum sagittis sed vitae ex. Nulla orci lectus, facilisis convallis leo id, cursus imperdiet massa. Quisque vitae neque sit amet risus pretium condimentum. Morbi ac quam quis lorem efficitur sollicitudin.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-yellow-900">
            <div class="w-full py-10 md:py-20 container mx-auto px-5">
                <h1 class="text-4xl font-bold mb-5">ABOUT US</h1>
                <p class="leading-9 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sapien vitae magna condimentum sagittis sed vitae ex. Nulla orci lectus, facilisis convallis leo id, cursus imperdiet massa. Quisque vitae neque sit amet risus pretium condimentum. Morbi ac quam quis lorem efficitur sollicitudin. Duis in leo quis lacus semper luctus sit amet a ipsum. Sed nisi augue, consequat non molestie a, convallis et dui. Praesent in vulputate lorem. Etiam pharetra eget tortor a lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi id enim quis nisl porta tempor lacinia tincidunt nisi. Vivamus in accumsan urna. Sed commodo leo enim, a interdum quam varius vitae.
                </p>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-white text-black">
            <div class="w-full p-10 container mx-auto px-5">
                <h1 class="text-2xl font-bold mb-5">All Posts</h1>
                <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <!-- <Image class="w-full" src="/asset/background/blog-bg.jpg" alt="Sunset in the mountains" width={1000} height={1000}></Image> -->
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name_person: "",
            }
        },
        methods: {
            name() {
                return 'Ivan'
            }
        },
    }
</script>

<style lang="scss" scoped>
.custom-bg{
    background-image: url('../assets/blog/blog-bg.jpg');
    background-color: gray;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

</style>