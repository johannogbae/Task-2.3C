<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <!-- Your router-view for content -->
    <router-view />
  </div>
  <Footer>
    <Footer />
  </Footer>
</template>

<style>
/* Global styles for the entire application */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


router-view {
  flex-grow: 1; 
}

</style>
