<template>
  <div class="sheetData">
    <h2 v-if="lastTraing">
      Last Training on {{ lastTraing }}
    </h2>
    <div class="dogItems">
      <DogItem v-for="item in sheetItems" :sheetItem="item"></DogItem>
    </div>
  </div>
</template>

<script lang="ts">
import DogItem from '../components/DogItem.vue'

export default {
  name: 'SheetComponent',
  components: {
    DogItem
  },
  props: {
    sheetData: {
      type: Object as () => SheetData | undefined,
      required: false,
    },
  },
  computed: {
    selectedTab() {
      return this.sheetData == undefined ? 'No Tab Selected' : 'Tab 1';
    },
    sheetItems() {
      return this.sheetData?.sheets[0].items;
    },
    lastTraing() {
      return this.sheetItems != undefined ? this.sheetItems[0].Date : null;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
