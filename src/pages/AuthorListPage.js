import React, { useEffect, useState } from 'react';
import  Author  from '../models/Author.ts';
import { AuthorList } from '../components/AuthorList';
import { AuthorService } from '../services/AuthorService.ts';

const AuthorListPage = () => {

  const [authors, setAuthors] = useState([]);

  const loadAuthors = async () => {
    const authorService: AuthorService = new AuthorService();
    const authors1: Author[] = await authorService.getAuthors();
    setAuthors(authors1)
  }

  useEffect(() => {
    loadAuthors();
  }, []);

  return(<AuthorList props={authors} />);

}

export default AuthorListPage;
