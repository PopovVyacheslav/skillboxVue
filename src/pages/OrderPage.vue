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

            <h1 class="content__title">
                Корзина
            </h1>
            <span class="content__info">
                3 товара
            </span>
        </div>

        <section class="cart">
            <form class="cart__form form" action="#" method="POST">
                <div class="cart__field">
                    <div class="cart__data">
                        <AppFormText v-model="formData.name" title="ФИО" :error="formError.name" placeholder="Введите ваше полное имя" />

                        <AppFormText v-model="formData.address" title="Адрес доставки" :error="formError.address" placeholder="Введите ваш адрес" />

                        <AppFormText v-model="formData.phone" title="Телефон" :error="formError.phone" placeholder="Введите ваш телефон" type="tel" />

                        <AppFormText v-model="formData.email" title="Email" :error="formError.email" placeholder="Введи ваш Email" type="email" />

                        <AppFormTextaria v-model="formData.comments" title="Комментарий к заказу" :error="formError.comments" placeholder="Ваши пожелания" />
                    </div>

                    <div class="cart__options">
                        <h3 class="cart__title">Доставка</h3>
                        <ul class="cart__options options">
                            <li class="options__item">
                                <label class="options__label">
                                    <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                                    <span class="options__value">
                                        Самовывоз <b>бесплатно</b>
                                    </span>
                                </label>
                            </li>
                            <li class="options__item">
                                <label class="options__label">
                                    <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                                    <span class="options__value">
                                        Курьером <b>500 ₽</b>
                                    </span>
                                </label>
                            </li>
                        </ul>

                        <h3 class="cart__title">Оплата</h3>
                        <ul class="cart__options options">
                            <li class="options__item">
                                <label class="options__label">
                                    <input class="options__radio sr-only" type="radio" name="pay" value="card">
                                    <span class="options__value">
                                        Картой при получении
                                    </span>
                                </label>
                            </li>
                            <li class="options__item">
                                <label class="options__label">
                                    <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                                    <span class="options__value">
                                        Наличными при получении
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="cart__block">
                    <CartOrder :products="cartDetailProducts" :totalPrice="cartTotalPrice" />

                    <button class="cart__button button button--primery" type="submit">
                        Оформить заказ
                    </button>
                </div>
                <div class="cart__error form__error-block">
                    <h4>Заявка не отправлена!</h4>
                    <p>
                        Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.
                    </p>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
    import AppFormText from '@/components/AppFormText';
    import AppFormTextaria from '@/components/AppFormTextaria';
    import CartOrder from '@/components/CartOrder'
    import { mapGetters } from 'vuex';

    export default {
        data(){
            return {
                formData: {},
                formError: {},
            }
        },
        components: {
            AppFormText,
            AppFormTextaria,
            CartOrder,
        },
        computed: {
            ...mapGetters(['cartDetailProducts', 'cartTotalPrice']),
        },
    }
</script>