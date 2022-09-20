import React, { useEffect, useState } from 'react';
import { AuthorService } from '../services/AuthorService';
import { AuthorCard } from '../components/AuthorCard';

const AuthorPage = () => {

  const [author, setAuthor] = useState([]);

  const loadAuthor = ({ id }) => {
    const authorService: AuthorService = new AuthorService();
    authorService.getAuthor(id).then(r => setAuthor(r));
  }

  useEffect(() => {
    loadAuthor();
  }, []);

  return author !== null ? <AuthorCard author={author} /> : <p>loading</p>;
}

export default AuthorPage;
