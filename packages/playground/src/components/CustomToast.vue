<template>
	<div class="mx-auto max-w-max bg-blue-500">
		<span>{{ message }}</span>
	</div>
</template>

<script setup lang="ts">
import type { Toast } from '@vuetils/toast';

const { message } = defineProps<Toast>();
</script>
