<template>
  <div id="app">
    <ComponentContainer sheet-data="" />
  </div>
</template>

<script lang="ts">
import ComponentContainer from './components/ComponentContainer.vue'

export default {
  name: 'App',
  components: {
    ComponentContainer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
