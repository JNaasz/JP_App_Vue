<template>
    <button 
      v-for="tab in tabs" 
      :key="tab" 
      @click="selectTab(tab)"
      :class="{ active: tab === selectedTab }"
    >
      {{ tab }}
    </button>
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

<style>
button {
	.active {
		background-color: rgb(64, 64, 179);
	}
}

</style>