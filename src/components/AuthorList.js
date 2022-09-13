import { Card, Container } from 'semantic-ui-react';
import { AuthorCard } from './AuthorCard';
import { render } from '@testing-library/react';

export const AuthorList = (props) => {

  const list = props.props;

  render(
    <Container style={{ padding: 10 }}>
      <h1>Book list</h1>
      <Card.Group itemsPerRow={4}>
        {list.map((author) => (
          <AuthorCard
            firstName={author.firstName}
            lastName={author.lastName}
          />
        ))}
      </Card.Group>
    </Container>
  );
}
