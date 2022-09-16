// @ts-ignore
import Author from '../models/Author.ts';

export class AuthorService {

    private baseUrl: string;
    user = JSON.parse(localStorage.getItem("user"));
    token = this.user.token;

    constructor() {
        this.baseUrl = 'http://localhost:8088/api/authors/';
    }

    public async getAuthors(): Promise<Author[]> {
        const url = this.baseUrl;
        // @ts-ignore
        return await fetch(url, {

            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(res => res.clone().json());
    }

}
