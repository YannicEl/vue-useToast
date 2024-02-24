<template>
	<Teleport to="body">
		<TransitionGroup name="v-toaster" tag="div" class="v-toaster">
			<component
				:is="customToast ? customToast : defaultToast"
				v-for="[id, props] in toasts"
				:key="id"
				v-bind="props"
			/>
		</TransitionGroup>
	</Teleport>
</template>

<script lang="ts" setup>
import { Component } from 'vue';
import { toasts, type Toast } from '../composables/useToast';
import defaultToast from './Toast.vue';

const { customToast } = defineProps<{ customToast?: Component<Toast> }>();
</script>

<style scoped>
.v-toaster {
	pointer-events: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: end;
	gap: 1rem;
	top: 1rem;
	right: 1rem;
	bottom: 1rem;
	left: 1rem;
	z-index: 9999;
}

.v-toaster-enter-active,
.v-toaster-leave-active {
	transition: all 0.3s ease-in-out;
}

.v-toaster-enter-from,
.v-toaster-leave-to {
	opacity: 0;
	transform: scale(0.5);
}
</style>
