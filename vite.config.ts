import type { UserConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const cwd = process.cwd();

export default <UserConfig>{
	base: './',
	root: './src/web/',
	resolve: {
		alias: {
			'@': resolve(cwd, 'src/web/'),
			'@web': resolve(cwd, 'src/web/'),
			'@package.json': resolve(cwd, 'package.json'),
			'@lkp_utils.json': resolve(cwd, 'lkp_utils.json')
		}
	},
	build: {
		outDir: resolve(cwd, 'dist'),
		copyPublicDir: false
	},
	publicDir: resolve(cwd, 'public'),
	plugins: [vue(), {
		name: 'rename-index-html',
		enforce: 'post',
		generateBundle(_, bundle) {
			if (bundle['index.html'])
				bundle['index.html'].fileName = 'popup.html';
		}
	}]
}
