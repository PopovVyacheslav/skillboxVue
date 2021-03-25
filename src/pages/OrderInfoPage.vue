<template>     
    <main class="content container">
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link" href="index.html">
                        Каталог
                    </a>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link" href="cart.html">
                        Корзина
                    </a>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                        Оформление заказа
                    </a>
                </li>
            </ul>

            <h1 class="content__title" v-if='cartOrderInfo'>
                Заказ оформлен <span>№ {{ cartOrderInfo.id }}</span>
            </h1>
        </div>

        <section class="cart">
            <form class="cart__form form" action="#" method="POST">
                <div class="cart__field">
                    <p class="cart__message">
                        Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа. 
                        Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
                    </p>

                    <ul class="dictionary" v-if='cartOrderInfo'>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Получатель
                            </span>
                            <span class="dictionary__value">
                                {{ cartOrderInfo.name }}
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Адрес доставки
                            </span>
                            <span class="dictionary__value">
                                {{ cartOrderInfo.address }}
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Телефон
                            </span>
                            <span class="dictionary__value">
                                {{ cartOrderInfo.phone }}
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Email
                            </span>
                            <span class="dictionary__value">
                                {{ cartOrderInfo.email}}
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Способ оплаты
                            </span>
                            <span class="dictionary__value">
                                Картой при получении
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="cart__block" v-if='cartOrderInfo'>
                    <CartOrder :products="cartOrderInfo.basket.items" :totalPrice="cartOrderInfo.totalPrice"/> 
                </div>
            </form>
        </section>
    </main>
</template>

<script>
import CartOrder from '@/components/CartOrder';
import { mapGetters } from 'vuex';

export default {
        components: {CartOrder},
        computed:{
            ...mapGetters(['cartOrderInfo'])
        },
        methods:{
            loadInfo(){
                if(this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$route.params.id){
                    return;
                }
                this.$store.dispatch('loadOrderInfo', this.$route.params.id)
                    .catch(()=>{
                        this.$router.replace({name: 'notFound'});
                    });
            },
        },
        watch: {
            '$route.params.id': {
                handler() {
                    this.loadInfo();
                },
                immediate: true
            }
        },
    }
</script>