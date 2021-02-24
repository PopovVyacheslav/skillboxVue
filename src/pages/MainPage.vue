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
                <ProductList :products="products"/>
                <AppPagination v-model="currenPage" :count="countProducts" :per-page="productsPerPage"/>
            </section>
        </div>
    </main>
</template>


<script>
    import products from '@/data/products';
    import ProductList from '@/components/ProductList';
    import AppPagination from '@/components/AppPagination';
    import ProductFilter from '@/components/ProductFilter';
    import axios from'axios';

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
            }
        },
        computed: {
            filteredProducts(){
                let filteredProducts = products;
                if (this.productFilter.priceFrom > 0){
                    filteredProducts = filteredProducts.filter(product => product.price >= this.productFilter.priceFrom);
                }
                if (this.productFilter.priceTo > 0){
                    filteredProducts = filteredProducts.filter(product => product.price <= this.productFilter.priceTo);
                }
                if (this.productFilter.categoryId){
                    filteredProducts = filteredProducts.filter(product => product.categoryId === this.productFilter.categoryId);
                }
                if (this.productFilter.colorId){
                    filteredProducts = filteredProducts.filter(product => product.colorsId.includes(this.productFilter.colorId));
                }
                return filteredProducts;
            },
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
                axios.get(`http://vue-study.dev.creonit.ru/api/products?page=${this.currenPage}&limit=${this.productsPerPage}`)
                    .then(response => this.productData = response.data);
            },
        },
        watch:{
            currenPage(){
                this.loadProducts();
            }
        },
        created(){
            this.loadProducts();
        },
    };
</script>
