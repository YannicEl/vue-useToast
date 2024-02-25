<template>
	<div class="flex flex h-screen w-screen flex-col items-center justify-center">
		<button @click="addToast">Press me</button>

		<div class="mt-4 grid grid-cols-3 gap-4">
			<label v-for="value in positions">
				{{ value }}
				<UInput :field="position" type="radio" name="radio" :value="value" />
			</label>
		</div>
	</div>

	<Toaster :toast="CustomToast" :position="position.value" />
</template>

<script setup lang="ts">
import { UInput, useField } from '@vuetils/form';
import type { ToastPosition } from '@vuetils/toast';
import { Toaster, toast } from '@vuetils/toast';
import CustomToast from './components/CustomToast.vue';

const positions: ToastPosition[] = [
	'top-left',
	'top-center',
	'top-right',
	'bottom-left',
	'bottom-center',
	'bottom-right',
];

const position = useField<ToastPosition>('bottom-center');

function addToast() {
	toast.success(Date.now() + '', { autoClose: false });
}
</script>

<style></style>
