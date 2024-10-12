const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotasPartidos = require('./src/rotas/rotasPartidos');
const rotasCandidatos = require('./src/rotas/rotasCandidatos');

const port = 3001;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(rotasPartidos);
app.use(rotasCandidatos);

app.listen(port, () => console.log(`Executando na porta ${port}`));
