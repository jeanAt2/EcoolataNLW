import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'SQl',
    connection: {
        filename: path.resolve(__dirname,'database.sql'),
    },
});

export default connection;
