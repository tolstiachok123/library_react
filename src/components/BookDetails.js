import React from "react";
import { Button, Grid, Image, Table } from 'semantic-ui-react';

export const BookDetails = ({
    id,
    title,
    price,
    imageUrl,
    author,
    tags,
    createdAt,
    updatedAt,
}) => {
    const rows = [
        {
            name: 'title',
            keyContent: 'title',
            value: title,
        },
        {
            name: 'author',
            keyContent: 'author',
            value: author,
        },
        {
            name: 'tags',
            keyContent: 'tags',
            value: tags,
        },
        {
            name: 'price',
            keyContent: <span style={{ color: 'red' }}>price</span>,
            value: `$${price}`,
            editableValue: price,
        },
        {
            name: 'createdAt',
            keyContent: 'createdAt',
            value: createdAt,
        },
        {
            name: 'updatedAt',
            keyContent: 'updatedAt',
            value: updatedAt,
        },
    ];

    return (
        <Grid centered>
            <Grid.Column width={4}>
                <Image src={imageUrl} size="large" />
            </Grid.Column>
            <Grid.Column width={12}>
                <Table definition>
                    <Table.Body>
                        {rows.map((row) => (
                            <Table.Row>
                                <Table.Cell width={2}>
                                    {row.keyContent}
                                </Table.Cell>
                                <Table.Cell>
                                    {row.value}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell colSpan="4">
                                <Button>
                                    <span>В корзину</span>
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Grid.Column>
        </Grid>
    );
}