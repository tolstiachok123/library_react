
// @ts-ignore
import {fetchRequest} from "./FetchUtils.ts";
import {authorDTO} from "../models/AuthorDTO";
// @ts-ignore
import Author from "../models/Author.ts";

export class AuthorService {

    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async getAuthors(): Promise<Author[]> {
        const url = this.baseUrl;
        const {content: authorsDTO}: {content: Author[]} = await fetchRequest.get(url);

        const authors = authorsDTO.map((authorsElement: authorDTO) => {
            return new Author(authorsElement);
        });

        return authors;
    }

}
