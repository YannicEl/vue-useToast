<template>
	<div class="v-toast">
		<SuccessIcon v-if="type === 'success'" class="v-icon" />
		<ErrorIcon v-if="type === 'error'" class="v-icon" />
		<Spinner v-if="type === 'loading'" class="v-spinner" />

		<span class="toast-message">{{ message }}</span>
	</div>
</template>

<script setup lang="ts">
import type { Toast } from '../composables/useToast';
import ErrorIcon from './ErrorIcon.vue';
import Spinner from './Spinner.vue';
import SuccessIcon from './SuccessIcon.vue';

const { message } = defineProps<Toast>();
</script>

<style scoped>
.v-toast {
	pointer-events: auto;
	display: flex;
	max-width: max-content;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	background: white;
	padding: 1rem;
	border-radius: 0.375rem;
	box-shadow:
		rgba(0, 0, 0, 0) 0px 0px 0px 0px,
		rgba(0, 0, 0, 0) 0px 0px 0px 0px,
		rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
		rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
}

.v-spinner {
	width: 1.25rem;
	height: 1.25rem;
}

.v-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 100%;
	padding: 0.125rem;
}
</style>
