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
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});