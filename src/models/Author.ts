// @ts-ignore
import {authorDTO} from "src/models/AuthorDTO";

export class Author {

    public firstName: string;

    public lastName: string;

    constructor(authorDTO: authorDTO) {
        this.firstName = authorDTO.firstName;
        this.lastName = authorDTO.lastName;
    }
}
