import { execSync } from 'child_process';

const basePath = './src/scss/';
const distPath = './dist/css/';
const scss = [
	'index.scss',
	// 'vertical-tab.scss',
];

scss.forEach(name => {
	execSync(`sass ${basePath}${name} ${distPath}${name.replace('.scss', '.css')}`);
});
