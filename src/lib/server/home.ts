import { parse } from 'path';

export interface HomePage {
	studioSubtitle: string;
	studioImage: string;
	gallery: string[];
}

type GlobEntry = {
	metadata: HomePage;
	default: unknown;
};

export const homeData = () => {
	const allHomeData = Object.entries(
		import.meta.glob<GlobEntry>('./../content/sections/**/*.md', { eager: true })
	).map(([filepath, globEntry]) => {
		const pathParts = filepath.split('/');
		const fileLocale = pathParts[pathParts.length - 2];

		return {
			...globEntry.metadata,
			slug: parse(filepath).name,
			locale: fileLocale
		};
	});
	return allHomeData;
};
