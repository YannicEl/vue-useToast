import { Component, ref } from 'vue';

export type ToastType = 'success' | 'error' | 'loading';

export type Toast = {
	id: string;
	type: ToastType;
	message: string;
	createdAt: Date;
	close: (delay?: number) => void;
};

export type ToastPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export type ToasterOptions = {
	toast: Component<Toast>;
	position?: ToastPosition;
};

export type ToastOptions = {
	type?: ToastType;
	delay?: number;
	autoClose?: boolean;
};

export const toasts = ref<Map<string, Toast>>(new Map());
let runningId = 0;

export function addToast(
	message: string,
	{ type = 'success', delay = 3000, autoClose = true }: ToastOptions = {}
): Toast {
	const id = `${runningId++}`;

	const toast: Toast = {
		id,
		type,
		message,
		createdAt: new Date(),
		close: (_delay = delay) => {
			setTimeout(() => {
				toasts.value.delete(id);
			}, _delay);
		},
	};

	if (autoClose) toast.close();

	toasts.value.set(id, toast);
	return toasts.value.get(id)!;
}

function success(message: string, options: ToastOptions = {}): Toast {
	return addToast(message, { type: 'success', ...options });
}

function error(message: string, options: ToastOptions = {}): Toast {
	return addToast(message, { type: 'error', ...options });
}

function loading(message: string, options: ToastOptions = {}): Toast {
	return addToast(message, { type: 'loading', ...options });
}

async function promise<T>(
	promise: Promise<T>,
	{ loading, error, success }: { loading: string; error?: string; success?: string },
	options: ToastOptions = {}
): Promise<T> {
	const toast = addToast(loading, { type: 'loading', autoClose: false, ...options });

	try {
		const result = await promise;
		if (success) {
			toast.type = 'success';
			toast.message = success;
		}

		return result;
	} catch (err) {
		if (error) {
			toast.type = 'error';
			toast.message = error;
		}

		throw err;
	} finally {
		toast.close();
	}
}

export const toast = {
	success,
	error,
	loading,
	promise,
};
