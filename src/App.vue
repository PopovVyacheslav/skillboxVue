<template>
  <section class="catalog">
    <ProductList :products="products"/>
    <AppPagination v-model="currenPage" :count="countProducts" :per-page="productsPerPage"/>
  </section>
</template>

<script>
  import products from './data/products'
  import ProductList from './components/ProductList'
  import AppPagination from './components/AppPagination'

  export default {
    name: 'App',
    components: {
      ProductList,
      AppPagination,
    },
    data: function() {
      return {
        currenPage: 1,
        productsPerPage: 3,
      }
    },
    computed: {
      products(){
        const offset = (this.currenPage - 1) * this.productsPerPage;
        return products.slice(offset, offset + this.productsPerPage);
      },
      countProducts(){
        return products.length;
      },
    }
  };
</script>
