const getCurrentVersion = () => {
	const matchs = navigator.userAgent?.match(/moekoemusic\/(\d\.\d\.\d)/);
	if(!matchs) return null;
	else return matchs[1];
}

const compare = (v1: string, v2: string) => v1.localeCompare(v2, undefined, { numeric: true, sensitivity: 'base' });

export default (condition?: string) => {
	if(!condition) return true;

	const matchs = condition.match(/([><]?=?)(\d\.\d\.\d)/);
	if(!matchs)
		throw new Error('invaild condition format!');

	const currentVersion = getCurrentVersion();
	if(!currentVersion) {
		// can not get current version, maybe is on web?
		return true;
	}

	const result = compare(currentVersion, matchs[2]);
	switch(matchs[1]) {
		case '>':
			return result === 1;
		case '>=':
			return result === 1 || result === 0;
		case '<':
			return result === -1;
		case '<=':
			return result === -1 || result === 0;
		default:
			return false;
	}
}
