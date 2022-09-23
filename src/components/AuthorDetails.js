import { Form, Card, Segment } from 'semantic-ui-react';
import React, { useState } from 'react';
import * as routes from '../constants/routes';
import { AuthorService } from '../services/AuthorService.ts';
import { useNavigate } from 'react-router-dom';
import Author from '../models/Author.ts';

export const AuthorDetails = ({ author }) => {
  const [lastName, setLastName] = useState(author.lastName);
  const [firstName, setFirstName] = useState(author.firstName);
  const navigate = useNavigate();
  const authorService: AuthorService = new AuthorService();
  // if ((Math.floor(Math.random() * 2)) < 1) {
  //   return (
  //     <Card style={{ cursor: 'pointer' }}>
  //       <Card.Content textAlign="center">
  //         <Card.Header>{author.lastName + ' ' + author.firstName}</Card.Header>
  //       </Card.Content>
  //     </Card>);
  // } else {
  //   return (
  //     <Form size="mini">
  //       <Segment stacked>
  //         <Form.Input
  //           name="LastName"
  //           placeholder={author.lastName}
  //           value={lastName}
  //           onChange={(event) => setLastName(event.target.value)}
  //         />
  //         <Form.Input
  //           name="FirstName"
  //           placeholder={author.firstName}
  //           value={firstName}
  //           onChange={(event) => setFirstName(event.target.value)}
  //         />
  //         <Form.Button onClick={async () => {
  //           await authorService.updateAuthor(JSON.parse(JSON.stringify({id: author.id, firstName: firstName, lastName: lastName})))
  //           navigate(routes.AUTHOR_LIST + author.id)
  //         }}>
  //           Change
  //         </Form.Button>
  //         <Form.Button onClick={async () => {
  //           await authorService.deleteAuthor(author.id)
  //           navigate(routes.AUTHOR_LIST)
  //         }}>
  //           Remove
  //         </Form.Button>
  //       </Segment>
  //     </Form>
  //   )
  // }
  return (
    <Form size="mini">
      <Segment stacked>
        <Form.Input
          name="LastName"
          placeholder={author.lastName}
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <Form.Input
          name="FirstName"
          placeholder={author.firstName}
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <Form.Button onClick={async () => {
          await authorService.updateAuthor(new Author(author.id, firstName, lastName))
          navigate(routes.AUTHOR_LIST + author.id)
        }}>
          Change
        </Form.Button>
        <Form.Button onClick={async () => {
          await authorService.deleteAuthor(author.id)
          navigate(routes.AUTHOR_LIST)
        }}>
          Remove
        </Form.Button>
      </Segment>
    </Form>
  )
};
