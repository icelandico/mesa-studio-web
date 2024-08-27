import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const data = await import(`../../../lib/content/projects/${params.slug}.md`);

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
}
