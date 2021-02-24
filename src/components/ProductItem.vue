<template>
    <div>
        <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
            <img :src="product.image" :alt="product.title">
        </router-link>
        <h3 class="catalog__title">
        <router-link :to="{name: 'product', params: {id: product.id}}">
            {{ product.title }}
        </router-link>
        </h3>
        <span class="catalog__price">
            {{ product.price | numberFormat }}₽
        </span>
       <ColorSelector class="colors--list" :colors='product.colors' :selected-color.sync='currentColorId'/>
    </div>
</template>

<style>
    .colors--list{--border-color: #222}
</style>

<script>
    import numberFormat from '@/helpers/numberFormat'
    import colors from "@/data/colors";
    import ColorSelector from '@/components/ColorSelector'
    export default {
        data() {
            return {
                currentColorId: 0,
            };
        },
        props: ['product'],
        filters: {
            numberFormat
        },
        computed:{
            colors(){
                return colors.filter(color => this.product.colorsId.includes(color.id));
            },
        },
        components: {
            ColorSelector
        },
    }
</script>