<template>
	<div class="max-w-max rounded-md bg-black p-4 text-white shadow-xl">
		<span>{{ id }}</span>
	</div>
</template>

<script setup lang="ts">
import type { Toast } from '@vuetils/toast';

const { id } = defineProps<Toast>();
</script>
