const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("React Station Server Running");
});

app.listen(port, () =>{
    console.log(`React Server Running On Port: ${port}`);
});