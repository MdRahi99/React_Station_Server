const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const core_concepts = require('./Data/CoreConcepts.json'); 

app.get('/', (req, res) => {
    res.send("React Station Server Running");
});

app.get('/core-concepts', (req, res) => {
    res.send(core_concepts);
});

app.get('/core-concepts/:id', (req, res) => {
    const id = req.params.id;
    const selectedConcept = core_concepts.find(concept => concept.id === id);
    res.send(selectedConcept);
});

app.listen(port, () =>{
    console.log(`React Server Running On Port: ${port}`);
});