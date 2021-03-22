import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import Product from '@/pages/ProductPage';
import NotFoundPage from '@/pages/NotFoundPage';
import CartPage from '@/pages/CartPage';
import OrderPage from '@/pages/OrderPage';

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: MainPage, path: '/'},
    {name: 'product', component: Product, path: '/product/:id'},
    {name: 'cart', component: CartPage, path: '/cart'},
    {name: 'order', component: OrderPage, path: '/order'},
    {name: 'notFound', component: NotFoundPage, path: '*'},
];

const router = new VueRouter({
    routes
});

export default router;