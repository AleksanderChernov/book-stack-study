export type CommonApiParams = {
    token?: string;
};

export type CustomFetch<T> = {
    url: URL;
    method?: 'POST' | 'GET' | 'UPDATE' | 'DELETE';
    headers: {
        'content-type'?: string;
    };
    next?: {
        revalidate: number;
    };
    requestBody?: T;
};
