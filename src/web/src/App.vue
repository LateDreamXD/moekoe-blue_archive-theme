<script setup lang="ts">
import defaultConfig from '../../data/default.json';
import { reactive, onMounted } from 'vue';
import BASpark from 'vue-ba-spark';

const config = reactive<BAConfig>(defaultConfig);

const localWallpapers = [
	'arona.jpg',
	'pv-2nd.png',
	'pv-3rd.png',
	'pv-4th.png',
	'shiroko-bike.jpg',
	'shiroko-bike-2.jpg',
	'yukkai-and-nora.jpg'
];

const getPath = (file: string) => {
	return chrome.runtime.getURL(file);
}

onMounted(async () => {
	const { config: configFromStorage } = await chrome.storage.local.get('config');
	Object.assign(config, configFromStorage);
});
</script>

<template>
	<h4>外观</h4>
	<div>
		<label for="wallpaper">壁纸</label>
		<div>
			<img v-for="wallpaper in localWallpapers" :key="wallpaper"
				 :src="getPath(`wallpaper/${wallpaper}`)" :title="wallpaper"
				 @click="config.appearance.wallpaper = wallpaper" />
			<button>
				<i class="fas fa-plus" />
			</button>
		</div>
	</div>
	<BASpark />
</template>
