<template>
        <div class="py-2 bg ">
        <div class="bg flex justify-center ">
        <label for="" class="text-black text-3xl" >Search Recipes</label>
        <input type="text" v-model="char" class="border py-2 px-2 mx-2 text-black bg-slate-200" placeholder="Search by name" />
        <button @click="getUrl(char)" class="py-2 px-5 text-black rounded-full ">
            <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        <div class="container m-auto grid lg:grid-cols-4 md:grid-cols-1 gap-2 px-3 first-letter:">
            <div v-for="(p, index) in items.meals" :key="index">
                <NuxtLink :to="`/products/${p.idMeal}`">
                    <ProductCard :product="p" />
                </NuxtLink>
            </div>
        </div>
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';
import {
    SfButton,
    SfIconPerson,
    SfInput,
    SfIconSearch,
} from '@storefront-ui/vue';

const actionItems = [
    {
        label: 'Log in',
        icon: SfIconPerson,
        ariaLabel: 'Log in',
        role: 'login',
    },
];
const char = ref("");
const url = ref("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken");
const { data: items, pending } = await useFetch(url, { refectch: true });
function getUrl(char) {
    url.value = `https://www.themealdb.com/api/json/v1/1/search.php?s=${char}`;
}

</script>

<style  scoped>.bg {
    background-color: #ffffff;
}</style>