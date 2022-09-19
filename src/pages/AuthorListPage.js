import React, { useEffect, useState } from 'react';
import { AuthorList } from '../components/AuthorList';
import { AuthorService } from '../services/AuthorService.ts';

const AuthorListPage = () => {

  const [authors, setAuthors] = useState([]);

  const loadAuthors =  () => {
    const authorService: AuthorService = new AuthorService();
    authorService.getAuthors().then(r => setAuthors(r));
  }

  useEffect(() => {
    loadAuthors();
  }, []);

  return authors.length !== 0 ? <AuthorList authors={authors} /> : <p>loading</p>;
}

export default AuthorListPage;
