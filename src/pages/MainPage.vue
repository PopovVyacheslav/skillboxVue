<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">
                Каталог
            </h1>
            <span class="content__info">
                152 товара
            </span>
        </div>

        <div class="content__catalog">
            <ProductFilter :product-filter.sync="productFilter"/>
            <section class="catalog">
                <img src="@/../public/img/preloader.gif" v-if="productsLoading"/>
                <div v-if="productsLoadingFailed">Произошла ошибка при загрузке товаров <button @click.prevent="loadProducts">Попробовать еще раз</button> </div>
                <ProductList :products="products"/>
                <AppPagination v-model="currenPage" :count="countProducts" :per-page="productsPerPage"/>
            </section>
        </div>
    </main>
</template>


<script>
    import ProductList from '@/components/ProductList';
    import AppPagination from '@/components/AppPagination';
    import ProductFilter from '@/components/ProductFilter';
    import axios from'axios';
    import {API_BASE_URL} from '@/config';

    export default {
        components: {
            ProductList,
            AppPagination,
            ProductFilter,
        },
        data: function() {
            return {
                productFilter:{
                    priceFrom: 0,
                    priceTo: 0,
                    categoryId: 0,
                    colorId: 0,
                },
                currenPage: 1,
                productsPerPage: 3,
                productData: null,
                loadProductsTimer: null, // Для эмурилирования медленного соединения
                productsLoading: false,
                productsLoadingFailed: false,
            }
        },
        computed: {
            products(){
                return this.productData
                    ? this.productData.items.map(product => {
                        return {
                            ...product,
                            image: product.image.file.url
                        }
                    })
                    : [];
            },
            countProducts(){
                return this.productData ? this.productData.pagination.total : 0;
            },
        },
        methods: {
            loadProducts(){
                this.productsLoading = true;
                this.productsLoadingFailed = false;
                clearTimeout(this.loadProductsTimer);
                this.loadProductsTimer = setTimeout(() =>{
                    axios
                        .get(API_BASE_URL + '/api/products',{
                            params: {
                                page: this.currenPage,
                                limit: this.productsPerPage,
                                categoryId: this.productFilter.categoryId,
                                colorId: this.productFilter.colorId,
                                minPrice: this.productFilter.priceFrom,
                                maxPrice: this.productFilter.priceTo
                            }
                        })
                        .then(response => this.productData = response.data)
                        .catch(() => this.productsLoadingFailed = true)
                        .then(() => this.productsLoading = false);
                }, 3000);
            },
        },
        watch:{
            currenPage(){
                this.loadProducts();
            },
            productFilter(){
                this.loadProducts();
            },
        },
        created(){
            this.loadProducts();
        },
    };
</script>
