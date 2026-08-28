import defaultCfg from '../data/default.json';

const merge = (target: Record<string, any>, source: Record<string, any>) => {
	for(const key of Object.keys(source)) {
		if(!(key in target)) target[key] = source[key];
		else if(
			target[key] !== null && typeof target[key] === 'object' &&
			source[key] !== null && typeof source[key] === 'object'
		) merge(target[key], source[key]);
	}
	return target;
}

const set = async (config: any) =>  await chrome.storage.local.set({ 'ba-theme-config': config });

const get = async () => {
	const { 'ba-theme-config': config } =
		await chrome.storage.local.get('ba-theme-config') as { 'ba-theme-config': BAConfig };
	if(!config) {
		await set(defaultCfg);
		return defaultCfg as BAConfig;
	} else {
		merge(config, defaultCfg);
		await set(config);
		return config;
	}
}

export default {
	merge, set, get
}
