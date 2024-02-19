const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());
// GET: Fetch all movies from the database
// app.get('/', (req, res) => {
//     db.select('*')
//         .from('movies')
//         .then((data) => {
//             console.log(data);
//             res.json(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/api1', (req, res) => {
  res.send('Response from API 1');
});

app.get('/api2', (req, res) => {
  res.send('Response from API 2');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));