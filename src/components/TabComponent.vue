<template>
  <v-btn
    v-for="tab in tabs"
    :key="tab"
    @click="selectTab(tab)"
    :class="{'v-btn--active': tab === selectedTab}"
    variant="tonal"
  >
    {{ tab }}
  </v-btn>
</template>

<script>
export default {
	props: {
		modelValue: String,
	},
	data() {
		return {
			tabs: ['Home', 'Dog'],
		};
	},
	computed: {
		selectedTab: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			},
		}

	},
	methods: {
		selectTab(tab) {
			this.selectedTab = tab;
		},
	},
}
</script>
