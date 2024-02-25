<template>
	<Teleport to="body">
		<TransitionGroup name="v-toaster" tag="div" class="v-toaster" :style="styles">
			<component :is="toast" v-for="[id, props] in toasts" :key="id" v-bind="props" />
		</TransitionGroup>
	</Teleport>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { ToasterOptions, toasts } from '../composables/useToast';

const props = withDefaults(defineProps<ToasterOptions>(), {
	position: 'bottom-center',
});

const { position, toast } = toRefs(props);

const styles = computed(() => {
	const isTop = position.value.startsWith('top');

	return {
		'flex-direction': isTop ? 'column-reverse' : 'column',
		'justify-content': isTop ? 'start' : 'end',
		'align-items': position.value.endsWith('left')
			? 'start'
			: position.value.endsWith('right')
				? 'end'
				: 'center',
	};
});
</script>

<style scoped>
.v-toaster {
	pointer-events: none;
	position: fixed;
	display: flex;
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
