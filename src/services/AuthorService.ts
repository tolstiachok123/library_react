import {Author} from "../models/Author";
import {fetchRequest} from "./FetchUtils";
import {authorDTO} from "../models/AuthorDTO";

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
