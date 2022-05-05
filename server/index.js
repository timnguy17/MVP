const express = require('express')
const path = require('path');
const app = express();
const port = 3333;
// const axios = require('axios');
const fetch = require('node-fetch')
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());



app.get('/search', (req, res) => {
  fetch(
    `https://public-api.tracker.gg/v2/apex/standard/profile/${req.query.platform}/${req.query.user}`,
    {
      headers: {
        'TRN-Api-Key': process.env.API_KEY,
      },
    },
  )
    .then(data => data.json())
    .then(d => res.send(d))
    .catch(err => res.status(500).send(err));
});



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


// headers: {
//   'TRN-Api-Key': process.env.API_KEY
// }