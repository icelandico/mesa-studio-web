import { homeData } from '$lib/server/home';
import { projectsData } from '$lib/server/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'Home Page',
		homePageData: homeData(),
		projectsPageData: projectsData()
	};
};
