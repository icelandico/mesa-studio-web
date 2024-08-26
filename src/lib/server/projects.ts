import { parse } from 'path';

type GlobEntry = {
	metadata: Project[];
	default: unknown;
};

export interface Project {
	title: string;
	projectMainImg: string;
	gallery: string[];
	projectDescription: string;
	slug: string;
}

export const projectsData = Object.entries(
	import.meta.glob<GlobEntry>('./../content/projects/**/*.md', { eager: true })
).map(([filepath, globEntry]) => {
	return {
		...globEntry.metadata,

		slug: parse(filepath).name
	};
});
