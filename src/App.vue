<template>
  <div id="app">
    <img alt="Vue logo" :src="require('@/assets/logo.png')">
    <ComponentContainer sheet-data=""/>
    <!-- <HelloWorld msg="Well hello there"/> -->
  </div>
</template>

<script>
import ComponentContainer from './components/ComponentContainer.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import getSheetData from './api/sheets';

export default {
  name: 'App',
  components: {
    ComponentContainer,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
