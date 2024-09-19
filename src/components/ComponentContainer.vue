<template>
  <div class="main">
    <v-btn @click="showAlert">Click Me</v-btn>
    <v-alert v-if="alertVisible" type="success">Vuetify is working!</v-alert>
    <div class="section-container">
      <LandingPage msg="Well hello there" v-if="activeTab === 'Home'" />
      <SheetData v-else :sheetData="sheetData" />
    </div>
    <div class="tab-container">
      <TabComponent v-model="activeTab"></TabComponent>
    </div>
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue';
import SheetData from './SheetData.vue';
import TabComponent from './TabComponent.vue';

import { getSheetData } from '@/api/sheets';

export default {
  name: 'ComponentContainer',
  components: {
    LandingPage,
    SheetData,
    TabComponent,
  },
  data() {
    return {
      sheetData: null,
      section: 'landing',
      activeTab: 'Home',
      alertVisible: false,
    };
  },
  watch: {
    activeTab(newVal, oldVal) {
      console.log('Tab changed from', oldVal, 'to', newVal);
    }
  },
  methods: {
    showAlert() {
      this.alertVisible = !this.alertVisible;
    },
  },
  async mounted() {
    try {
      this.sheetData = await getSheetData();
    } catch (error) {
      console.error('Error fetching sheet data:', error);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
