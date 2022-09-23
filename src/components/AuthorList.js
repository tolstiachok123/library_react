import { Card, Container } from 'semantic-ui-react';
import { AuthorCard } from './AuthorCard';
import React from 'react';

export const AuthorList = ({ authors }) => {

  return(
    <Container style={{ padding: 10 }}>
      <h1>Author list</h1>
      <Card.Group itemsPerRow={4}>
        {authors.map((author) => (
          <AuthorCard
            key={author.id}
            id={author.id}
            author={author}
          />
        ))}
      </Card.Group>
    </Container>
  );
}
