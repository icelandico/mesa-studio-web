import { homeData } from '$lib/server/home';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'Home Page',
		homePageData: homeData
	};
};
