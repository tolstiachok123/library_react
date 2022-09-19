// @ts-ignore
import Author from '../models/Author.ts';
// @ts-ignore
import * as routes from './constants/routes';
import { LocalStorageService } from "./LocalStorageService";

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
        return await fetch(authorListUrl, {

            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(res => res.json());
    }

}
