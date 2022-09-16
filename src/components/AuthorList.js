import { Card, Container } from 'semantic-ui-react';
import { AuthorCard } from './AuthorCard';
import React from 'react';

export const AuthorList = (authors) => {

  return(
    <Container style={{ padding: 10 }}>
      <h1>Author list</h1>
      <Card.Group itemsPerRow={4}>
        {authors.length ? authors?.map((author) => (
          <AuthorCard
            props={author}
          />
        )) : <p>loading...</p>}
      </Card.Group>
    </Container>
  );
}
