import { parse } from 'path';

export interface HomePage {
	studioSubtitleOne: string;
	studioSubtitleTwo: string;
	studioSubtitleThree: string;
	studioImage: string;
	gallery: string[];
}

type GlobEntry = {
	metadata: {en: HomePage, pl: HomePage};
	default: unknown;
};

export const homeData = () => {
	const allHomeData = Object.entries(
		import.meta.glob<GlobEntry>('./../content/sections/**/*.md', { eager: true })
	).map(([filepath, globEntry]) => {
		return {
			...globEntry.metadata,
			slug: parse(filepath).name
		};
	});
	return allHomeData;
};
