<template>
  <div id="app">
    <div class="main">
      <v-container>
        <TabComponent :activeTab="activeTab" :tabs="tabs" @update:activeTab="activeTab = $event" />

        <!-- <transition name="fade"> -->
          <LandingPage v-if="activeTab === 0" msg="Well hello there" />
          <SheetComponent v-else-if="activeTab === 1" :sheetData="sheetData" />
          <p v-else>Tab 3 content</p>
        <!-- </transition> -->
      </v-container>
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
      activeTab: 0,
      tabs: ['Home', 'Dog', 'Temp Tab']
    };
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

<style scoped>
/* Basic app styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
