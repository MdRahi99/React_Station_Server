const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const core_concepts = require('./Data/CoreConcepts.json'); 
const users_messages = require('./Data/UsersMessage.json'); 

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

app.post('/feedbacks', (req, res) => {
    const feedbacks = req.body;
    feedbacks.id = users_messages.length + 1;
    users_messages.push(feedbacks);
    res.send(feedbacks);
    console.log(feedbacks);
})

app.get('/feedbacks', (req, res) => {
    res.send(users_messages);
});

app.listen(port, () =>{
    console.log(`React Server Running On Port: ${port}`);
});