import { useEffect, useState } from 'react';
import { authorService } from 'src/services/AuthorService';
import { Author } from '../models/Author';
import { AuthorList } from '../components/AuthorList';

export const AuthorListPage = async () => {

  const [authors, setAuthors] = useState<Author[]>([]);

  const loadAuthors: () => void = async () => {
    const authors: Author[] = await authorService.getAuthors();
    setAuthors(authors)
  }

  useEffect(() => {
    loadAuthors();
  }, []);

  return <AuthorList props={authors} />;

}
