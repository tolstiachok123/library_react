import { Card } from 'semantic-ui-react';
import React from 'react';

export const AuthorDetails = ({ author }) => {
  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Content textAlign="center">
        <Card.Header>{ author.lastName + ' ' + author.firstName }</Card.Header>
      </Card.Content>
    </Card>
  );
};
