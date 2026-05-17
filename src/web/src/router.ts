import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import { PaletteIcon, ImageIcon, BlocksIcon, InfoIcon } from '@lucide/vue';

export const pages: RouteRecordRaw[] = [
	{
		path: '/theme',
		name: 'Theme',
		component: () => import('./views/Theme.vue'),
		meta: {
			title: '主题',
			icon: PaletteIcon
		}
	},
	{
		path: '/wallpaper',
		name: 'Wallpaper',
		component: () => import('./views/Wallpaper.vue'),
		meta: {
			title: '壁纸',
			icon: ImageIcon
		}
	},
	// {
	// 	path: '/plugins',
	// 	name: 'Plugins',
	// 	component: () => import('./views/Plugins.vue'),
	// 	meta: {
	// 		title: '插件',
	// 		icon: BlocksIcon
	// 	}
	// },
	{
		path: '/about',
		name: 'About',
		component: () => import('./views/About.vue'),
		meta: {
			title: '关于',
			icon: InfoIcon
		}
	}
];

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/theme'
	},
	...pages
];

export default createRouter({
	history: createWebHashHistory(),
	routes
});
