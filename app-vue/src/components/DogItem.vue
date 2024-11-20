<template>
	<v-card class="dogItem">
    <p><span>{{ sheetItem.Date }} </span></p>
		<p>Practiced for {{ sheetItem.Duration }}min in the {{ sheetItem.Place }}.</p>
		<p v-if="sheetItem.Comment?.length">{{ sheetItem.Comment }}.</p>
	</v-card>
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

<style scoped>
.v-card {
  margin-top: 30px;
  border: 1px solid #6200ea;
  border-radius: 5px;
  padding: 10px 0 10px;

  p {
    display: flex;
    margin: 0 10px;

    span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
}
</style>
