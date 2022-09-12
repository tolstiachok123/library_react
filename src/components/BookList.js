import { Card, Container } from 'semantic-ui-react';
import { BookCard } from './BookCard';
import axios from "axios";

export const BookList = async () => {

    const response = await axios.get(`http://localhost:8088/api/books/`, { withCredentials: true })
    const books = response.data;

    return (
        <Container style={{ padding: 10 }}>
            <h1>Book list</h1>
            <Card.Group itemsPerRow={4}>
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        price={book.price}
                    />
                ))}
            </Card.Group>
        </Container>
    );
};