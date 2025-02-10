<template>
  <div>
   <!-- <MainViews/> -->
   <RouterView/>
  </div>
</template>

<script>
import MainViews from './views/MainViews.vue';
import { RouterView } from 'vue-router';


export default {
  components: {
   MainViews,
  },
};
</script>
