<template>
	<form @submit.prevent="submit">
		<!-- TODO: add date picker popup to modify date - https://vuetifyjs.com/en/components/date-pickers/#guide -->
		<v-text-field v-model="date" label="Practice Date:"></v-text-field>
		<v-text-field v-model="duration" label="How many minutes did you practice?"></v-text-field>
		<v-text-field v-model="place" label="Where were you practicing?"></v-text-field>
		<v-text-field v-model="comment" label="Additional comments:"></v-text-field>

		<div class="buttons">
			<v-btn @click="cancel" class="me-4">Cancel</v-btn>
			<v-btn @click="submit">Submit</v-btn>
		</div>

	</form>
</template>

<script lang="ts">
export default {
	name: 'DogForm',
	data: () => ({
		date: '',
		duration: 0,
		place: '',
		comment: ''
	}),
	methods: {
		cancel() {
			this.$emit('update:trainingStatus', false);
		},
		submit() {
			this.$emit('update:trainingStatus', false);
		},
		setInitialDate() {
			const date = new Date();
			const day = String(date.getDate()).padStart(2, '0');
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const year = String(date.getFullYear()).slice(-2);
			this.date = `${month}/${day}/${year}`;
		}
	},
	mounted() {
		this.setInitialDate();
	}
}
</script>

<style scoped>
.buttons {
	text-align: right;

	button {
		margin-left: 10px;
	}
}
</style>