import React, { useEffect, useState } from 'react';
import  Author  from '../models/Author.ts';
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
  return <AuthorList authors={authors} />;

}

export default AuthorListPage;
