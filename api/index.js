const express = require('express')
const app = express()
const port = 3000;
const fetch = require('node-fetch');

const API_URL = 'https://swapi.co';

app.get('*', function (req, res) {
    console.log('request', `${API_URL}${req.url}`)
    fetch(`${API_URL}${req.url}`)
        .then(resp => resp.json())
        .then(json => res.json({
            ...json,
            results: json.results.slice(0, 10);
        }))
        .catch(err => res.json(err));
    //res.json({poop:true})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))