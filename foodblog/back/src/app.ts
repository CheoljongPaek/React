// import express, {Application, Request, Response} from 'express';

// const app: Application = express();
// const port: number = 8080;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello Wolrd');
// });

// app.listen(port, () => {
//   console.log(`Connected successfully on port ${port}`);
// });

import express from 'express';

const app = express();
// const PORT = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Life", (req, res) => {
  res.send("Life!");
});

app.post("/api/post", (req, res) => {
  console.log("Connected to React!");
  res.redirect("/");
});
  
  
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});