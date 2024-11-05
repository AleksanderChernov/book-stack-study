import { books } from './books';

export const token = process.env.BOOKS_TOKEN;
export const baseUrlWithToken = process.env.API_URL + `key=${token}`;

export const api = {
    books: { ...books },
};
