import { init as initStyles } from './styles';
import defaultCfg from '../data/default.json';
import checkHelper from '@shared/check-helper';

const getCfg = async (): Promise<BAConfig> => {
	const { 'ba-theme-config': config } =
		await chrome.storage.local.get('ba-theme-config') as { 'ba-theme-config': BAConfig };
	if(!config) {
		await chrome.storage.local.set({ 'ba-theme-config': defaultCfg });
		return defaultCfg as BAConfig;
	} else return config;
}

const init = async () => {
	if(location.hash === '#/lyrics') return; // ignore lyrics window
	document.documentElement.dataset.theme = 'ba'; // theme sign
	const app = document.querySelector('#app:not([data-v-app])')!;

	chrome.storage.onChanged.addListener((changes, area) => {
		if(area === 'local' && changes['ba-theme-config']) {
			const config = changes['ba-theme-config'].newValue as BAConfig;
			console.log('[ba-theme] ba-theme-config changed, reload styles');
			initStyles(config);
			app.classList.toggle(
				'--ba-vertical-tab',
				config.appearance.verticalTab && checkHelper('verticalTab').result
			);
			app.classList.toggle('--ba-auto-hide-player', config.appearance.autoHidePlayer);
		}
	});

	const config = await getCfg();
	if(config.appearance.verticalTab && checkHelper('verticalTab').result)
		app.classList.add('--ba-vertical-tab');
	if(config.appearance.autoHidePlayer) app.classList.add('--ba-auto-hide-player');
	initStyles(config);
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
