import checkVersion from '@shared/check-version';
import version from '@data/version.json';

export default (id: keyof typeof version.appearance) => ({
	required: version.appearance[id],
	result: checkVersion(version.appearance[id])
});
