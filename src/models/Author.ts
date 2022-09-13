import {authorDTO} from "./AuthorDTO";

export default class Author {

    public firstName: string;

    public lastName: string;

    constructor(authorDTO: authorDTO) {
        this.firstName = authorDTO.firstName;
        this.lastName = authorDTO.lastName;
    }
}
