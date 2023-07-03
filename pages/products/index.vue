<template>
    <div class="bg">
        <section v-if="pending" class="loading">
<img src="~assets/images/loading.gif" alt="">
        </section>
        <section class="container m-auto" v-else>
            <div class="text-center">
                <h1 class="text-3xl text-black text-center font-bold p-4">Welcome to Eva_t</h1> 
                <div class="mb-3">
                <label for="" class="from-label text-black text-center text-2xl">Select Category</label>
                <select
                class="from-select from-select-lg text-black w-full h-10 border border-indigo-200 text-center bg-slate-100 px-3 "
                v-model="name"
                @change="getUrl(name)">
            <option selected>Select one</option>
        <option
         :value="category.strCategory"
         v-for="(category,index) in categoryData.categories"
         :key="index">
         {{ category.strCategory }}
        </option>
    </select>
         </div>
            </div>
            <div class="container m-auto grid lg:grid-cols-4 md:grid-cols-1 gap-2 px-3 ">
                <div v-for="(p, index) in data.meals" :key="index">
                <NuxtLink :to="`/products/${p.idMeal}`"><ProductCard :product="p" /></NuxtLink>
            </div>
            </div>
        </section> <hr>
    </div>
</template>

<script setup>
let name ="Seafood";
const url = ref(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
const { data: categoryData } = await useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
const {data, pending} = useFetch(url, { refetch: true });
function getUrl(category) {
    url.value =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
}

</script>

<style scoped>
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