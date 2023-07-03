<template>
    <div class="bg ">
        <div v-if="pending" class="loading">
<img src="~assets/images/loading.gif" alt="">
        </div>
        <div class="py-2 " v-else>
            <label for="" class="text-black px-2">Search Items by Alphabet</label>
        <input type="text" v-model="ch" class="border py-2 px-2 mx-2 text-black bg-slate-200 " maxlength="1" />
        <button @click="getUrl(ch)" class="py-2 px-5 text-black rounded-full "><i class="fa-solid fa-magnifying-glass"></i></button>
        <div class="container m-auto grid lg:grid-cols-4 md:grid-cols-1 gap-2 px-3 ">
                <div v-for="(p, index) in items.meals" :key="index">
                <NuxtLink :to="`/products/${p.idMeal}`"><ProductCard :product="p" /></NuxtLink>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const ch = ref("a");
const url = ref("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
const {data: items , pending } = await useFetch(url,{ refectch: true});
function getUrl(ch) {
    url.value=`https://www.themealdb.com/api/json/v1/1/search.php?f=${ch}`;
}
</script>

<style  scoped>
.bg{
    background-color: #ffffff;

}
.loading{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
}
</style>