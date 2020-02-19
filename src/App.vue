<template>
  <div id="app">
    <router-link :to="{ name: 'listStudent' }">list Students</router-link>
    <router-view />
  </div>
</template>

<script>
import list from "./components/list";
export default {
  name: "App",
  components: {
    list
  }
};
</script>

<style>
</style>
