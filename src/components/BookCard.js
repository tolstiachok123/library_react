import React from 'react';
import { Card } from 'semantic-ui-react';

export const BookCard = ({ price, title }) => {
    return (
        <Card style={{ cursor: 'pointer' }}>
            <Card.Content textAlign="center">
                <Card.Header>{ title }</Card.Header>
            </Card.Content>
            <Card.Content textAlign="center">
                <i>
                    <span>$</span>
                    { price }
                </i>
            </Card.Content>
        </Card>
    );
};