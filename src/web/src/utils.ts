export const saveConfig = async (config: BAConfig) => {
	await chrome.storage.local.set({ 'ba-theme-config': config });
}

export const loadConfig = async (): Promise<BAConfig | undefined> => {
	const cfg = await chrome.storage.local.get('ba-theme-config');
	if(cfg['ba-theme-config']) return cfg['ba-theme-config'];
}
