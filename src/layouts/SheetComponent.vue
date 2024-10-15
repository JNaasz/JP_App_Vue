<template>
  <div class="sheetData">
    <h2>
      Lets see what the sheet data is:
		</h2>
		<p>
			{{ sheetData }}
		</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SheetComponent',
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
