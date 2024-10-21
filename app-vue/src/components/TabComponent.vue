<template>
  <v-tabs v-model="selectedTab" align-tabs="center" color="deep-purple-accent-4">
    <v-tab v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>

<script lang="ts">
export default {
  props: {
    activeTab: {
      type: Number,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
	},
	computed: {
		selectedTab: {
			get() {
				return this.activeTab;
			},
			set(value: String) {
				this.$emit('update:activeTab', value);
			},
		}
	},
	methods: {
		selectTab(tab: number) {
			this.selectedTab = tab;
		},
	},
}
</script>

<style scoped>
.v-tabs {
  margin-bottom: 20px;
}
</style>
