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



/*
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Main from './pages/Main'


function App() {

  useEffect(() => {
    console.log('useEffect');
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  },);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/