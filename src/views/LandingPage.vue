<template>
    <div class="nunito">
        <section class="md:custom-bg bg-[#024D94] md:bg-transparent">
            <LandingPageHeader/>
            <div class="grid grid-cols-8 pb-20 bg-[#F8D171] md:bg-transparent">
                <div class="custom-bg-small md:custom-bg-small-none col-span-8 md:col-span-3 px-5 md:px-0 md:ml-20 py-20 flex items-center">
                    <div class="w-full">
                        <h1 class="text-4xl lg:text-6xl font-black mb-5">
                            Let's Keep Your Data Safe
                        </h1>
                        <h5 class="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
                            tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
                            tellus. Lorem ipsum dolor sit amet.
                        </h5>
                        <button type="button" class="bg-[#F8D171] py-2 px-5">
                            <p class="text-[#024D94] font-semibold">Know More</p>
                        </button>
                    </div>
                </div>
                <div class="col-span-8 md:col-span-5 flex items-center">
                    <div class="md:pl-20 w-full md:h-[40rem] hidden md:block">
                        <img class="object-cover w-full h-full md:max-w-[50vw]" src="../assets/blog/blog-bg.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white">
            <div class="grid grid-cols-8 py-0 md:py-20">
                <div class="col-span-8 md:col-span-4 py-20 px-10 md:px-20 pb-0">
                    <h1 class="text-4xl lg:text-5xl font-black mb-5 text-[#024D94]">About The Protem</h1>
                    <img class="w-20 my-5" src="../assets/landingPage/line1.png" alt="">
                    <p class="text-[#555555] text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed dui mollis, finibus odio eget, cursus nibh. Ut accumsan, ipsum a hendrerit tempor, ex tortor consectetur tortor, at viverra leo enim at tortor. Mauris tristique purus purus, sit amet tempor lacus suscipit at. Quisque tristique orci magna, vitae tincidunt lacus maximus vitae. Lorem ipsum dolor sit amet, consectetur. 
                    </p>
                    <ul class="my-5">
                        <li class="flex items-center my-3">
                            <svg class="w-[30px] h-[30px] text-[#024D94]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <p class="text-[#555555] ml-2">Nunc quis justo sed odio scelerisque.</p>
                        </li>
                        <li class="flex items-center my-3">
                            <svg class="w-[30px] h-[30px] text-[#024D94]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <p class="text-[#555555] ml-2">Duis tristique lorem non risus dignissim.</p>
                        </li>
                    </ul>
                    <button type="button" class="bg-[#F8D171] py-2 px-5">
                        <p class="text-[#024D94] font-semibold">Learn More</p>
                    </button>
                </div>
                <div class="col-span-8 md:col-span-4 flex items-center justify-end">
                    <div class="p-10 w-full h-full flex justify-center">
                        <img class="object-cover w-full h-[30rem] md:max-w-[30rem] max-h-[20rem] md:max-h-[30rem]" src="../assets/blog/blog-bg.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#FAFAFA]">
            <div class="px-10 py-20">
                <div class="flex flex-col items-center"> 
                    <h1 class="text-[#024D94] text-5xl font-black text-center">Future of The Protem</h1>
                    <img class="w-20 my-5" src="../assets/landingPage/line1.png" alt="">
                    <p class="text-black max-w-3xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
                <div class="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4 text-black mt-10">
                    <div class="flex justify-center w-full items-center">
                        <div class="flex items-center max-w-xl">
                            <div>
                                <div class="bg-[#F8D171] p-5">
                                    <img src="../assets/landingPage/store.svg" alt="" class="min-w-[2rem]">
                                </div>
                            </div>
                            <div class="ml-3">
                                <h5 class="text-[#024D94] font-black">
                                    Data Stored
                                </h5>
                                <p class="text-[#555555]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center w-full items-center">
                        <div class="flex items-center max-w-xl">
                            <div>
                                <div class="bg-[#F8D171] p-5">
                                    <img src="../assets/landingPage/lamp.svg" alt="" class="min-w-[2rem]">
                                </div>
                            </div>
                            <div class="ml-3">
                                <h5 class="text-[#024D94] font-black">
                                    Innovative Idea
                                </h5>
                                <p class="text-[#555555]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center w-full items-center">
                        <div class="flex items-center max-w-xl">
                            <div>
                                <div class="bg-[#F8D171] p-5">
                                    <img src="../assets/landingPage/fingerprint.svg" alt="" class="min-w-[2rem]">
                                </div>
                            </div>
                            <div class="ml-3">
                                <h5 class="text-[#024D94] font-black">
                                    Fingerprint Lock
                                </h5>
                                <p class="text-[#555555]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center w-full items-center">
                        <div class="flex items-center max-w-xl">
                            <div>
                                <div class="bg-[#F8D171] p-5">
                                    <img src="../assets/landingPage/lock.svg" alt="" class="min-w-[2rem]">
                                </div>
                            </div>
                            <div class="ml-3">
                                <h5 class="text-[#024D94] font-black">
                                    Password Protect
                                </h5>
                                <p class="text-[#555555]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <LandingPageFooter/>
    </div>
</template>

<script>
import LandingPageFooter from '../components/LandingPage/LandingPageFooter.vue';
import LandingPageHeader from '../components/LandingPage/LandingPageHeader.vue';

    export default {
    components: { LandingPageHeader, LandingPageFooter }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.nunito{
    font-family: "Nunito Sans";
}
</style>