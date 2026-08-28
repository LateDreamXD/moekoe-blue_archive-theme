import clickEffect from '@shared/click-effect';
import configHelper from '@shared/config-helper';

export const saveConfig = async (config: BAConfig) => {
	clickEffect.onConfigChanged(config.appearance.clickEffect.config);
	await configHelper.set(config);
}

export const loadConfig = async (): Promise<BAConfig> => {
	return configHelper.get();
}
