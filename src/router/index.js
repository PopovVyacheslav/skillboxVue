import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage'
import Product from '@/pages/ProductPage'
import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: MainPage, path: '/'},
    {name: 'product', component: Product, path: '/product/:id'},
    {name: 'notFound', component: NotFoundPage, path: '*'}
];

const router = new VueRouter({
    routes
});

export default router;