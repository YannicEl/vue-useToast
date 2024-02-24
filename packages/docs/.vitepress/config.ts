import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitepress';
import pgk from '../../lib/package.json' assert { type: 'json' };

export default defineConfig({
	title: '@vuetils/toast',
	description: 'Vue toasts made easy',

	lastUpdated: true,
	cleanUrls: true,

	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/introduction/getting-started' },
			{ text: 'API', link: '/api' },
			{
				text: pgk.version,
				items: [
					{ text: 'Changelog', link: '/changelog' },
					{
						text: 'Contributing',
						link: 'https://github.com/YannicEl/vue-useToast/blob/main/.github/contributing.md',
					},
				],
			},
		],

		sidebar: [
			{
				text: 'Introduction',
				items: [{ text: 'Getting Started', link: '/introduction/getting-started' }],
			},

			{
				text: 'Changelog',
				link: '/changelog',
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/YannicEl/vue-useToast' }],

		footer: {
			copyright: 'Copyright © 2023-present Yannic Ellhotka',
			message: 'Released under the MIT License.',
		},

		editLink: {
			pattern: 'https://github.com/YannicEl/vue-useToast/edit/main/packages/docs/:path',
			text: 'Edit this page on GitHub',
		},

		// search: {
		// 	provider: 'algolia',
		// 	options: {
		// 		appId: '2BGIIBDV7T',
		// 		apiKey: '442cce0eaf51aa00b95644f003f47b54',
		// 		indexName: 'toast',
		// 	},
		// },
	},

	sitemap: {
		hostname: 'https://example.com',
		lastmodDateOnly: true,
	},

	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		['link', { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
	],

	vite: {
		plugins: [UnoCSS()],
	},
});
