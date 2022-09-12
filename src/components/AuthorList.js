import axios from 'axios';
import { Card, Container } from 'semantic-ui-react';
import { AuthorCard } from './AuthorCard';
import { render } from '@testing-library/react';

export const AuthorList = async () => {

  const response = await axios.get(`http://localhost:8088/api/authors/`, { withCredentials: true })
  const authors = response.data;

  render(
    <Container style={{ padding: 10 }}>
      <h1>Book list</h1>
      <Card.Group itemsPerRow={4}>
        {authors.map((author) => (
          <AuthorCard
            firstName={author.firstName}
            lastName={author.lastName}
          />
        ))}
      </Card.Group>
    </Container>
  );
}
