<template>
  <div>
    
<nav class=" backk border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <!-- <a href="#" class="flex items-center">
        <img src="~assets/images/logo.png"  class=" w-50 h-20 "  alt="Flowbite.Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> -->
    <NuxtLink to="/"> <img src="~assets/images/logo.png"  class=" w-50 h-20 " /></NuxtLink>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto backk" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">

        <li>
          <NuxtLink to="/products" class="block py-2 pl-3 pr-4 text-black backk rounded md:bg-transparent
          md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Recipes</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/products/byalphabet" class="block py-2 pl-3 pr-4 text-black backk rounded md:bg-transparent
          md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Alphabet</NuxtLink>
        </li>

        <li >
          <NuxtLink to="/about" class="block py-2 pl-3 pr-4 text-black backk rounded md:bg-transparent
          md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">About</NuxtLink>
        </li>
    
        <li>
          <NuxtLink to="/contact" class="block py-2 pl-3 pr-4 text-black backk rounded md:bg-transparent
          md:text-black md:p-0 md:dark:text-black  md:dark:bg-transparent" aria-current="page">Contact</NuxtLink>
        </li>
        
      </ul>
    </div>
  </div> <hr>
</nav>

  </div>
    <!-- <header class=" bg-yellow-950 flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6  border-b border-neutral-200">
      <div class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="#"
          aria-label="SF Homepage"
          class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcset=""  />
            <img
              src="~assets/images/logo.png"
              alt="Sf Logo"
              class=" w-50 h-20 "
          />

          </picture>
        </a>
        <form
          role="search"
          class="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0 "
          @submit.prevent="search"
        >
          <SfInput
            v-model="inputValue"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>

        <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div class="flex flex-row flex-nowrap">
            <SfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              class="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
              :aria-label="actionItem.ariaLabel"
              variant="tertiary"
              square
            >
            </SfButton>
          </div>
        </nav>
        <NuxtLink class=" me-3 text-white hover:text-red-600" to="/">Home</NuxtLink>
        <NuxtLink class=" me-3 text-white hover:text-red-600" to="/about">About</NuxtLink>
        <NuxtLink class=" me-3 text-white hover:text-red-600" to="/contact">Contact </NuxtLink>
        <NuxtLink class=" me-3 text-white hover:text-red-600" to="/products">Product</NuxtLink>
        <NuxtLink class=" me-3 text-white hover:text-red-600" to="/products/byalphabet">Alphabet</NuxtLink>


      </div>
    </header> -->
  </template>
  <script setup>
  import { ref } from 'vue';
  import {
    SfButton,
    SfIconPerson,
    SfIconExpandMore,
    SfInput,
    SfIconSearch,
    SfIconMenu,
  } from '@storefront-ui/vue';
  
  const actionItems = [
    {
      label: 'Log in',
      icon: SfIconPerson,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];
  
  const inputValue = ref('');
  
  const search = () => {
    alert(`Successfully found 10 results for ${inputValue.value}`);

  };
  </script>
  <style scoped>
  .backk{
    background-color: #f8f6f6;
  }
  </style>
  