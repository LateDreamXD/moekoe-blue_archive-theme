type BAConfig = {
	appearance: {
		[x: string]: any;
		/** @default "arona.jpg" */
		wallpaper: string | false;
		/** @default "cover" */
		wallpaperSize: 'cover' | 'contain' | 'fill';
		/** @default true */
		customFonts: boolean;
		clickEffect: {
			/** @default true */
			enable: boolean;
			/** @default {} */
			config: Record<string, any> & import('ba-click-fx').BAClickFXConfig;
		};
		/** @default true */
		autoHidePlayer: boolean;
	}
	plugins: {
		[key: string]: {
			[key: string]: boolean;
		}
	}
}
