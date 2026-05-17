<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import BASpark from 'vue-ba-spark';
import defaultConfig from '../../data/default.json';
import { loadConfig } from './utils';
import { pages } from './router';

const config = reactive<BAConfig>(defaultConfig);


onMounted(async () => {
	const cfg = await loadConfig();
	if(cfg) {
		Object.assign(config, cfg);
	}
});
</script>

<template>
	<main>
		<router-view style="padding: 2rem;" :config="config" />
	</main>
	<footer>
		<nav>
			<router-link v-for="page in pages" :key="page.path" :to="page.path">
				<component :is="page.meta?.icon" />
				{{ page.meta?.title }}
			</router-link>
		</nav>
	</footer>
	<BASpark />
</template>

<style lang="scss" scoped>
footer {
	position: sticky;
	top: 100%;
	left: 0;
	right: 0;
	padding: 2rem;
	background-color: color-mix(in srgb, var(--pico-primary-background), transparent 70%);

	nav>a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		text-decoration: none;
	}
}
</style>
