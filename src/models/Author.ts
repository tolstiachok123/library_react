import {authorDTO} from "./AuthorDTO";

export default class Author {

    public id: bigint;

    public firstName: string;

    public lastName: string;

    constructor(id: bigint, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static createModelFromDto(authorDTO: authorDTO) {
        return new Author(authorDTO.id, authorDTO.firstName, authorDTO.lastName);
    }
}
