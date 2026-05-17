import { init as initStyles } from './styles';
import defaultCfg from '../data/default.json';

const getCfg = async (): Promise<BAConfig> => {
	const { 'ba-theme-config': config } =
		await chrome.storage.local.get('ba-theme-config') as { 'ba-theme-config': BAConfig };
	if(!config) {
		await chrome.storage.local.set({ 'ba-theme-config': defaultCfg });
		return defaultCfg;
	} else return config;
}

const init = async () => {
	if(location.hash === '#/lyrics') return; // ignore lyrics window

	chrome.storage.onChanged.addListener((changes, area) => {
		if(area === 'local' && changes['ba-theme-config']) {
			const config = changes['ba-theme-config'].newValue as BAConfig;
			console.log('[ba-theme] ba-theme-config changed, reload styles');
			initStyles(config);
		}
	});

	const config = await getCfg();
	if(config.appearance.verticalTab) {
		document.querySelector('#app:not([data-v-app])')?.classList.add('--ba-vertical-tab');
	}
	initStyles(config);
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
