<template>
  <div class="main">
    <h1>J&P Track Stuff</h1>
    <p>
      This is my container that will hold all other vue template content
    </p>
		<div class="main-container">
      <HelloWorld msg="Well hello there" v-if="sheetData === null"/>
      <SheetData v-else :sheetData="sheetData" />
		</div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import SheetData from './SheetData.vue';

import { getSheetData } from '@/api/get';

export default {
  name: 'ComponentContainer',
  components: {
    HelloWorld,
    SheetData
  },
  data() {
    return {
      sheetData: null
    };
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
