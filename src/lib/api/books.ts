import { baseUrlWithToken } from '.';
import { customFetch } from '../helpers';

async function getRandomBooks() {
    const url = new URL(`${baseUrlWithToken}`);
    url.searchParams.append('OrderBy', 'newest');
    return await customFetch({
        headers: { 'content-type': 'application/json' },
        url,
    });
}

export const books = {
    getRandomBooks,
};
