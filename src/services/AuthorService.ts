// @ts-ignore
import Author from '../models/Author.ts';
import {authorDTO} from '../models/AuthorDTO';

export class AuthorService {

    private baseUrl: string;
    user = JSON.parse(localStorage.getItem("user"));
    token = this.user.token;

    constructor(baseUrl: string) {
        this.baseUrl = 'http://localhost:8088/api/authors/';
    }

    public async getAuthors(): Promise<Author[]> {
        const url = this.baseUrl;
        // @ts-ignore
        const {content: authorsDTO}: {content: Author[]} = await fetch(url,{

            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })

        return authorsDTO.map((authorsElement: authorDTO) => {
            return new Author(authorsElement);
        });
    }

}
