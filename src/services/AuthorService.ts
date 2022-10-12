// @ts-ignore
import Author from '../models/Author.ts';
// @ts-ignore
import * as routes from './../constants/routes';
// @ts-ignore
import LocalStorageService from './LocalStorageService.ts';

export class AuthorService {

    private readonly authorListUrl: string;
    private readonly authorUrl: string;
    private token: string;

    constructor() {
        this.authorListUrl = routes.BACKEND_BASE_URL + routes.AUTHOR_LIST;
        this.authorUrl = routes.BACKEND_BASE_URL + routes.AUTHOR_DETAILS;
        // @ts-ignore
        this.token = LocalStorageService.getToken();
    }

    public async getAuthors(): Promise<Author[]> {
        // @ts-ignore
        return await fetch(this.authorListUrl, {

            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(res => res.json());
    }

    public async getAuthor({ id }): Promise<Author> {
        return await fetch(this.authorListUrl+id, {

            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(res => res.json());
    }

    public async deleteAuthor( id ): Promise<void> {
        // @ts-ignore
        return await fetch(this.authorListUrl+id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }

    public async updateAuthor( author ): Promise<Author> {
        console.log(JSON.stringify(author));
        return await fetch(this.authorListUrl+author.id, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(author)
        });
    }
}
