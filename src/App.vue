<template>
    <component :is="currentPageComponent" :page-params="currentPageParams" @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"/>
</template>

<script>
  import MainPage from '@/pages/MainPage';
  import ProductPage from '@/pages/ProductPage';
  import NotFoundPage from '@/pages/NotFoundPage.vue';

  const rout = {
    main: 'MainPage',
    product: 'ProductPage',
  };

  export default {
      data() {
        return {
          currenPage : 'main',
          currentPageParams: {},
        }
      },
      computed:{
        currentPageComponent(){
          return rout[this.currenPage] || 'NotFoundPage'
        },
      },
      methods: {
        gotoPage(pageName, pageParams){
          this.currenPage = pageName;
          this.currentPageParams = pageParams || {};
        },
      },
      components: {
        MainPage,
        ProductPage,
        NotFoundPage,
      },
    };
</script>
