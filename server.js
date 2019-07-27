// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// const app = express();

// const corsOptions = {
//     origin: 'http://localhost:1234',
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
// app.listen(4000, () => {
//     console.log('Listening on port 4000');
// });

// app.get('/', (req, res) => {
//     res.send('hi');
// });
// app.get('/api/posts', async (req, res) => {
//     const results = await axios.get('http://localhost:3000/posts');
//     res.send(results.data);
// });

// app.post('/api/posts', async (req, res) => {});

server.use(middlewares);
server.use(router);

server.listen(port);
