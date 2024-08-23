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

export const homeData = Object.entries(
	import.meta.glob<GlobEntry>('./../content/sections/**/*.md', { eager: true })
).map(([filepath, globEntry]) => {
	return {
		...globEntry.metadata,
		slug: parse(filepath).name
	};
});
