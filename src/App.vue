<template>
    <component :is="currentPageComponent" :page-params="currentPageParams"/>
</template>

<script>
  import MainPage from '@/pages/MainPage';
  import ProductPage from '@/pages/ProductPage';
  import NotFoundPage from '@/pages/NotFoundPage.vue';
  import eventBus from '@/eventBus';

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
      created(){
        eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
      },
    };
</script>
