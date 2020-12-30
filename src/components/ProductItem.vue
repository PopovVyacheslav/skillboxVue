<template>
    <div>
        <a class="catalog__pic" href="#">
        <img :src="product.image" :alt="product.title">
        </a>
        <h3 class="catalog__title">
        <a href="#">
            {{ product.title }}
        </a>
        </h3>
        <span class="catalog__price">
            {{product.price}}₽
        </span>
        <ul class="colors colors--black">
            <li class="colors__item" v-for="colorId in product.colorsId" :key="colorId">
                <label class="colors__label">
                <input class="colors__radio sr-only" type="radio" :value="colors.find(color => color.id === colorId).hexCode" v-model="color">
                <span class="colors__value" :style="{'background-color': colors.find(color => color.id === colorId).hexCode}">
                </span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    import colors from "../data/colors";
    export default {
        data() {
            return {
                color: "#73B6EA",
            };
        },
        props: ['product'],
        computed:{
            colors(){
              return colors;
            },
        },
    }
</script>