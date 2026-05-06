import { init as initStyles } from './styles';
import defaultCfg from '../data/default.json';

const getCfg = async (): Promise<BAConfig> => {
	const { config } = await chrome.storage.local.get('config') as { config: BAConfig };
	if(!config) {
		chrome.storage.local.set({ config: defaultCfg });
		return defaultCfg;
	} else return config;
}

const init = async () => {
	if(location.hash === '#/lyrics') return;
	const config = await getCfg();
	initStyles(config);
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
