const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/index');

const port = process.env.PORT || 3005;

app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.use(express.static(path.join(__dirname, '../front/build')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../front/build/index.html'))
// })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });

