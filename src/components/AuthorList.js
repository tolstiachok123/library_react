import { Card, Container } from 'semantic-ui-react';
import { AuthorCard } from './AuthorCard';
import { render } from '@testing-library/react';

export const AuthorList = (authors) => {

  const list = authors.props;

  render(
    <Container style={{ padding: 10 }}>
      <h1>Author list</h1>
      <Card.Group itemsPerRow={4}>
        {list.map((author) => (
          <AuthorCard
            props={author}
          />
        ))}
      </Card.Group>
    </Container>
  );
}
