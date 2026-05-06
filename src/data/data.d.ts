type BAConfig = {
	appearance: {
		/** @default "arona.jpg" */
		wallpaper: string;
		/** @default true */
		customFonts: boolean;
		clickEffect: {
			/** @default true */
			enable: boolean;
			config: import('vue-ba-spark').Options;
		};
		/** @default true */
		autoHidePlayer: boolean;
		/** @default true */
		verticalTab: boolean;
		/** @default false */
		hideMyFavInLib: boolean;
	}
	plugins: {
		[key: string]: {
			[key: string]: boolean;
		}
	}
}
