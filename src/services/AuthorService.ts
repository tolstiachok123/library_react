// @ts-ignore
import {fetchRequest} from "./FetchUtils.ts";
import {authorDTO} from "../models/AuthorDTO";
// @ts-ignore
import Author from "../models/Author.ts";

export class AuthorService {

    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = 'localhost:8088/api/authors/';
    }

    public async getAuthors(): Promise<Author[]> {
        const url = this.baseUrl;
        // @ts-ignore
        const {content: authorsDTO}: {content: Author[]} = await fetch(url,{
            method:'get',
            credentials: 'include'
        })

        const authors = authorsDTO.map((authorsElement: authorDTO) => {
            return new Author(authorsElement);
        });

        return authors;
    }

}
