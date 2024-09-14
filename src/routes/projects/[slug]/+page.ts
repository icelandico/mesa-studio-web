import { error } from '@sveltejs/kit';
import { languageTag } from '$lib/paraglide/runtime.js';

export const load = async ({ params, depends }) => {
	const lang = languageTag();
	depends('paraglide:lang');
	try {
		const data = await import(`../../../lib/content/projects/${lang}/${params.slug}.md`);

		return {
			title: data.metadata.title,
			projectMainImg: data.metadata.projectMainImg,
			projectDescription: data.metadata.projectDescription,
			gallery: data.metadata.gallery,
			content: data.default,
			meta: data.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
