import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import 'dotenv/config';

// import pageRouter from '../routes/page'
const pageRouter = require('./routes/page');

const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
// nunjucks

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET!,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

/* Types Start */
interface ErrorWithStatus extends Error {
  status?: number;
}
/* Types End */

app.use('/', pageRouter)

app.use((req, res, next) => {
  const error:ErrorWithStatus = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

/* Error Middleware Start */
app.use((err: ErrorWithStatus, req: Request, res: Response, next:NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
/* Error Middleware End*/

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/Life", (req, res) => {
//   res.send("Life!");
// });

// app.post("/api/post", (req, res) => {
//   console.log("Connected to React!");
//   res.redirect("/");
// });
  
  
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});