<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-link :to="{ name: 'listProduct' }">listProduct</router-link>
    <router-view />
  </div>
</template>

<script>
import listProducts from "./components/listProducts";
export default {
  name: "App",
  components: {
    listProducts
  }
};
</script>

<style>
</style>
