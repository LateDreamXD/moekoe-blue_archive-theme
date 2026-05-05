import { defineConfig } from 'tsdown';

const shared: import('tsdown').UserConfig = {
	minify: true,
	dts: false,
	format: 'iife',
	platform: 'browser'
}

export default defineConfig([
	{
		copy: {
			from: 'public/**/*',
			to: 'dist'
		},
		entry: {
			content: 'src/content/index.ts'
		},
		...shared
	},
	{
		entry: {
			background: 'src/background/index.ts'
		},
		...shared
	}
]);
