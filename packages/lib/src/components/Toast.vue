<template>
	<div class="v-toast">
		<!-- <div class="v-toast-icon">
			<div
				v-if="type === 'success'"
				class="grid h-5 w-5 place-items-center rounded-full bg-green-500"
			>
				<div class="i-mdi-check-bold text-white"></div>
			</div>

			<div v-if="type === 'error'" class="grid h-5 w-5 place-items-center rounded-full bg-red-500">
				<div class="i-mdi-close-bold text-white"></div>
			</div>

			 <Spinner v-if="type === 'loading'" class="h-5 w-5 stroke-gray-900" />  
		</div> -->

		<span class="v-toast-message">{{ message }}</span>
	</div>
</template>

<script setup lang="ts">
import type { Toast } from '../composables/useToast';

const { message } = defineProps<Toast>();
</script>

<style scoped>
.v-toast {
	pointer-events: auto;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	max-width: max-content;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	background: red;
	padding: 1rem;
}
</style>
