<template>
    <div class=" rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative my-6">
      <SfLink href="#">
        <img
          :src="product.strMealThumb"
          alt="Great product"
          class="block object-cover h-auto rounded-md aspect-square"
          :width="300"
          :height="300"
        />
      </SfLink>
    </div>
    <div class="">
      <SfLink href="#" variant="secondary" class="no-underline text-black"> {{ product.strMeal }} </SfLink>
      <div class="flex items-center pt-1">
      </div>
    </div>
    </div>

</template>

<script setup>
import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite  , SfIconArrowForward} from '@storefront-ui/vue';
defineProps({
  product:{},
})
</script>

