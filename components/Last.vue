<template>
    <div class=" back p-4">
        <div class="container grid lg:grid-cols-4 md:grid-cols-1">
            <p class="text-black">© DesignedBy Eva Tamrakar <br>
                <NuxtLink to="/about" class=" text-blue-700 ">About US</NuxtLink> <br>
                <NuxtLink to="/contact" class=" text-blue-700 " >Contact us</NuxtLink>
            </p>
            <ul>
                <li class="text-black ">
                    <h1>We are on</h1>
                    <i class="fa-brands fa-facebook me-2 text-blue-700 "></i>
                    <i class="fa-brands fa-instagram me-2 text-rose-600 "></i>
                    <i class="fa-brands fa-youtube me-2 text-red-700 "></i>
                    <i class="fa-brands fa-tiktok me-2 text-black "></i>
                </li>
            </ul>
            <ol class="text-black">
                <li>
                    <h1>We accpet</h1>
                </li>
                <li><a href="" class="text-blue-700" >Esewa</a></li>
                <li><a href="" class="text-blue-700" >Khalti</a></li>
                <li><a href="" class="text-blue-700" >Mobile Banking</a></li>

            </ol>
            <div>
                <NuxtLink to="/"> <img src="~assets/images/logo.png"  class=" w-50 h-20 " /></NuxtLink>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.back{
    background-color: #f8f6f6;
}
</style>