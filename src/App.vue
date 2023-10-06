<script>
import AppHeader from './components/AppHeader.vue';
import router from './router';

export default {
  components: {
    AppHeader,
    router
},
};
</script>

<template>
    <div  id="app">
      <AppHeader/>

      <div class="container mt-3">
        <router-view/>
      </div>
    </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>