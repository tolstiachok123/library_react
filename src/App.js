import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import * as routes from './constants/routes';
import AuthorListPage from './pages/AuthorListPage';
import React from 'react';
import AuthorPage from './pages/AuthorPage';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.LOGIN} element={<Login />} />
                <Route path={routes.REGISTRATION} element={<Register />} />
                <Route exact path={routes.AUTHOR_DETAILS} element={<AuthorPage />} />
                <Route exact path={routes.AUTHOR_LIST} element={<AuthorListPage />} />
            </Routes>
        </BrowserRouter>
    );
}
