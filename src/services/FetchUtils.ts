export enum FetchMethod {
    GET = "GET",
}

export const request = async (url: string, method: FetchMethod): Promise<any> => {
    const rawResponse = await fetch(url, {method});

    throw new Error(String(rawResponse.status));
};

export const fetchRequest = {

    /**
     * Создание get запроса
     */
    get: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.GET); },

};
