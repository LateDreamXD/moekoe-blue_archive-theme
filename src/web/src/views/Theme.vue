<script setup lang="ts">
import items from '../data/config-items';
import { saveConfig } from '../utils';

const { config } = defineProps<{
	config: BAConfig
}>();

const checkRole = (type: string) => {
	return type === 'checkbox'? 'switch': undefined;
}
</script>

<template>
	<div>
		<h2>主题配置</h2>
		<hgroup>
			<h4>外观</h4>
			<p>自定义主题的外观或行为。</p>
		</hgroup>
		<form>
			<label v-for="appeItem of items.appearanceItems" class="config-item" :for="appeItem.id">
				<span>
					<span style="display: inline;">
						{{ appeItem.label }}
					</span>
					<small v-if="appeItem.description" v-html="appeItem.description"></small>
				</span>
				<input v-if="appeItem.type" :type="appeItem.type" :id="appeItem.id" :role="checkRole(appeItem.type)"
					min="0" step="1" v-model.number="config.appearance[appeItem.model]" @change="saveConfig(config);" />
			</label>

			<i class="splitter" />
			<hgroup>
				<h5>点击特效</h5>
				<p>自定义点击特效效果。</p>
			</hgroup>

			<div>
				<label class="config-item" for="cfx-enable">
					<span>
						开启
						<small>点击特效全局开关</small>
					</span>
					<input type="checkbox" id="cfx-enable" role="switch"
						v-model="config.appearance.clickEffect.enable" @change="saveConfig(config);" />
				</label>
				<label v-for="cfxItem of items.clickEffectItems" class="config-item" :for="cfxItem.id">
					<span>
						{{ cfxItem.label }}
						<small v-if="cfxItem.description">{{ cfxItem.description }}</small>
					</span>
					<input :type="cfxItem.type" :id="cfxItem.id" :role="checkRole(cfxItem.type)" :min="cfxItem.min" :step="cfxItem.step"
						v-model="config.appearance.clickEffect.config[cfxItem.model]" @change="saveConfig(config);" />
				</label>
			</div>
		</form>
	</div>
</template>

<style scoped>
form {
	display: flex;
	gap: 0.8rem;
	flex-direction: column;

	.config-item {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			display: flex;
			flex-direction: column;

			small {
				color: var(--pico-muted-color);

				&:deep(s) {
					text-decoration-thickness: 3px;
				}
			}
		}

		input:not([type="checkbox"]) {
			max-width: 5rem;
			height: fit-content;
			margin: 0;
			padding: 0;
			padding-left: 6px;

			&[type="color"] {
				height: 32px;
				padding: 5px;
			}
		}
	}
}

.splitter {
	width: 100%;
	height: 1px;
	background-color: var(--pico-muted-border-color);
}
</style>
