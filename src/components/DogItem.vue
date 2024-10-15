<template>
	<ul class="dogItem">
		<li>Practiced for {{ sheetItem.Duration }}min on {{ sheetItem.Date }} in the {{ sheetItem.Place }}.</li>
		<li v-if="sheetItem.Comment.length">{{ sheetItem.Comment }}.</li>
	</ul>
</template>

<script lang="ts">
export default {
  name: 'SheetComponent',
  props: {
    sheetItem: {
      type: Object as () => SheetItem,
      required: true,
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
