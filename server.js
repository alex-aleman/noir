const express = require('express');

const app = express();
const port = 1337;

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));