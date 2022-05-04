const express = require('express')
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


app.get('/search', (req, res) => {
  axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${req.params.platform}/${req.params.user}`, {
    headers: {
      'TRN-Api-Key': process.env.API_KEY
    }
  }).then((response) => {
    res.send(response);
  }).catch((err) => {
    console.log(err);
  })
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


// headers: {
//   'TRN-Api-Key': process.env.API_KEY
// }