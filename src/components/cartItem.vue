<template>
    <li class="cart__item product">
        <div class="product__pic">
            <img :src="item.product.image" width="120" height="120" :alt="item.product.title">
        </div>
        <h3 class="product__title">
            <router-link :to="{name: 'product', params: {id: item.product.id}}">
                {{ item.product.title }}
            </router-link>
        </h3>
        <span class="product__code">
            Артикул: {{ item.productId }}
        </span>

        <appChangeAmount :amount.sync="amount" />

        <b class="product__price">
            {{ (item.amount * item.product.price) | numberFormat}} ₽
        </b>

        <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteCartProduct(item.productId)">
            <svg width="20" height="20" fill="currentColor">
            <use xlink:href="#icon-close"></use>
            </svg>
        </button>
    </li>
</template>

<script>
    import appChangeAmount from '@/components/AppChangeAmount'
    import numberFormat from '@/helpers/numberFormat';
    import { mapMutations } from 'vuex';

    export default {
        props: ['item'],
        filters: {
            numberFormat,
        },
        components: {
            appChangeAmount
        },
        computed: {
            amount: {
                get() {
                    return this.item.amount;
                },
                set(value) {
                    this.$store.commit('updateCartProductAmount', {productId: this.item.productId, amount: value});
                }
            }
        },
        methods:{
            ...mapMutations(['deleteCartProduct']),
        },
    }
</script>