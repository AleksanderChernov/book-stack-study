import { CustomFetch } from 'src/types/api';

export async function customFetch<T extends BodyInit | undefined | null>(props: CustomFetch<T>) {
    const { method, requestBody, url, headers } = props;

    try {
        const res = await fetch(url.toString(), {
            method: method ?? 'GET',
            headers: headers,
            body: requestBody,
        });

        if (!res.ok) {
            const json = await res.json();
            throw new Error(json.message);
        }

        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
