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
       <colorSelector :colors='this.colors' :selected-color.sync='currentColorId'/>
    </div>
</template>

<script>
    import colors from "../data/colors";
    import colorSelector from '../components/ColorSelector'
    export default {
        data() {
            return {
                currentColorId: 0,
            };
        },
        props: ['product'],
        computed:{
            colors(){
                return colors.filter(color => this.product.colorsId.includes(color.id));
            },
        },
        components: {
            colorSelector
        },
    }
</script>