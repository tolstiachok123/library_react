import { Card } from 'semantic-ui-react';
import React from 'react';
import * as routes from '../constants/routes';
import { useNavigate } from 'react-router-dom';

export const AuthorCard = ({ author }) => {
  const navigate = useNavigate();
  return(
    <Card onClick={() => { navigate(routes.AUTHOR_LIST + author.id) }} style={{ cursor: 'pointer' }}>
      <Card.Content textAlign="center">
        <Card.Header>{ author.lastName + ' ' + author.firstName }</Card.Header>
      </Card.Content>
    </Card>
  );
}
