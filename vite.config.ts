import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default <UserConfig>{
	root: './src/web/',
	build: {
		outDir: '../../dist/web'
	},
	plugins: [vue()]
}
