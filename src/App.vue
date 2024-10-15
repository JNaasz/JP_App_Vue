<template>
  <div id="app">
    <div class="main">
    <div class="section-container">
      <LandingPage msg="Well hello there" v-if="activeTab === 'Home'" />
      <SheetComponent v-else :sheetData="sheetData" />
    </div>
    <div class="tab-container">
      <TabComponent v-model="activeTab"></TabComponent>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import LandingPage from './layouts/LandingPage.vue';
import SheetComponent from './layouts/SheetComponent.vue';
import TabComponent from './components/TabComponent.vue';

import { getSheetData } from './api/sheets';

export default {
  name: 'App',
  components: {
    LandingPage,
    SheetComponent,
    TabComponent,
  },
  data() {
    return {
      sheetData: undefined as SheetData | undefined,
      section: 'landing',
      activeTab: 'Home',
    };
  },
  watch: {
    activeTab(newVal, oldVal) {
      console.log('Tab changed from', oldVal, 'to', newVal);
    }
  },
  async mounted() {
    try {
      const data = await getSheetData('dog,plants');
      this.sheetData = data;
      console.log('sheet data:', this.sheetData, typeof this.sheetData);
    } catch (error) {
      console.error('Error fetching sheet data:', error);
    }
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
