import { parse } from 'path';

type GlobEntry = {
	metadata: Project[];
	default: unknown;
};

export interface Project {
	title: string;
	projectMainImg: string;
	projectDescription: string;
	slug: string;
	projectGallery: Array<{
		caption: string;
		galleryPhoto: string;
	}>;
	addDate: string;
}

export const projectsData = () => {
	const projectsData = Object.entries(
		import.meta.glob<GlobEntry>('./../content/projects/**/*.md', { eager: true })
	).map(([filepath, globEntry]) => {
		const pathParts = filepath.split('/');
		const fileLocale = pathParts[pathParts.length - 2];

		return {
			...globEntry.metadata,
			locale: fileLocale,
			slug: parse(filepath).name
		};
	});
	return projectsData;
};
