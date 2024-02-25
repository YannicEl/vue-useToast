<template>
	<div class="flex flex h-screen w-screen flex-col items-center justify-center">
		<button class="rounded-md border border-black px-2 py-1 shadow-xl" @click="onClick">
			Press me
		</button>

		<div class="mt-4 grid grid-cols-3 gap-4">
			<label v-for="value in positions">
				{{ value }}
				<UInput :field="position" type="radio" name="position" :value="value" />
			</label>
		</div>

		<div class="mt-4 grid grid-cols-3 gap-4">
			<label v-for="value in types">
				{{ value }}
				<UInput :field="type" type="radio" name="type" :value="value" />
			</label>
		</div>
	</div>

	<Toaster :toast="ToastComponent" :position="position.value" />
</template>

<script setup lang="ts">
import { UInput, useField } from '@vuetils/form';
import type { ToastPosition, ToastType } from '@vuetils/toast';
import { ToastComponent, Toaster, addToast } from '@vuetils/toast';

const positions: ToastPosition[] = [
	'top-left',
	'top-center',
	'top-right',
	'bottom-left',
	'bottom-center',
	'bottom-right',
];

const types: ToastType[] = ['success', 'error', 'loading'];

const position = useField<ToastPosition>('bottom-center');
const type = useField<ToastType>('success');

function onClick() {
	addToast(Date.now() + '', {
		type: type.value,
		autoClose: false,
	});
}
</script>

<style></style>
