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
			config: import('ba-click-fx').BAClickFXConfig;
		};
		/** @default true */
		autoHidePlayer: boolean;
		/** @default true */
		verticalTab: boolean;
		/** @default false */
		hideMyFavInLib: boolean;
		/** @default 0 */
		sidebarMaxWidth: number;
	}
	plugins: {
		[key: string]: {
			[key: string]: boolean;
		}
	}
}
