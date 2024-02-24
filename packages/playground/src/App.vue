<template>
	<div class="flex flex h-screen w-screen flex-col items-center justify-center">
		<button @click="addToast">Press me</button>
	</div>

	<Toaster :customToast="CustomToast" />
</template>

<script setup lang="ts">
import { toast, Toaster } from '@vuetils/toast';
import CustomToast from './components/CustomToast.vue';

function addToast() {
	toast.success(Date.now() + '', { autoClose: false });
}
</script>

<style></style>
