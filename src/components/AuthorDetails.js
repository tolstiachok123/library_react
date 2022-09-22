import { Button, Card } from 'semantic-ui-react';
import React from 'react';
import * as routes from '../constants/routes';
import { AuthorService } from '../services/AuthorService.ts';
import { useNavigate } from 'react-router-dom';

export const AuthorDetails = ({ author }) => {
  const navigate = useNavigate();
  const authorService: AuthorService = new AuthorService();
  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Content textAlign="center">
        <Card.Header>{ author.lastName + ' ' + author.firstName }</Card.Header>
      </Card.Content>
      <Card.Content textAlign="center">
        <Button onClick={async () => {
          await authorService.deleteAuthor(author.id)
          navigate(routes.AUTHOR_LIST)
        }}>
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};
