import { defineConfig } from 'tsdown';

const shared: import('tsdown').UserConfig = {
	minify: true,
	dts: false,
	format: 'iife',
	platform: 'browser',
	deps: {
		alwaysBundle: ['vue', 'vue-ba-spark']
	}
}

export default defineConfig([
	{
		copy: {
			from: 'public/assets/',
			to: 'dist/'
		},
		entry: {
			content: 'src/content/index.ts'
		},
		...shared
	}
]);
