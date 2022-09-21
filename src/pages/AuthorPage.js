import React, { useEffect, useState } from 'react';
import { AuthorService } from '../services/AuthorService.ts';
import { AuthorDetails } from '../components/AuthorDetails';
import { useParams } from 'react-router-dom';

const AuthorPage = () => {

  const [author, setAuthor] = useState([]);
  const {id} : {id: string} = useParams();

  const loadAuthor = () => {
    const authorService: AuthorService = new AuthorService();
    authorService.getAuthor({id}).then(r => setAuthor(r));
  }

  useEffect(() => {
    loadAuthor();
  }, []);

  return author !== null ? <AuthorDetails author={author} /> : <p>loading</p>;
}

export default AuthorPage;
