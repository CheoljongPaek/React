import axios from 'axios';
import express from 'express';
const router = express.Router();

// router.use((req, res, next) => {
//   res.locals.user = null;
//   res.locals.followerCount = 0;
//   res.locals.followingCount = 0;
//   res.locals.followerIdList = 0;
//   next();
// });

router.get('/profile', (req, res) => {
  res.render('profile', { title: 'my info - nodebird' });
});

router.get('/join', (req, res) => {
  res.render('join', { title: 'sign up - nodebird' });
});

router.get('/', (req, res, next) => {
  // const twits:any[] = [];
  // res.render('main', {
  //   title: 'NodeBird',
  //   twits: twits,
  // })
  res.send("Hello World!");
});
router.get('/getWeatherNewYork', (req, res, next) => {
  // res.sendStatus(200);
  axios
    .get("http://api.weatherstack.com/current?access_key=c0c42a3f80ddb26bafe41fe5761db771&query=New%20York")
    // .then(response => {console.log(response);})
    .then(response => {
      res.json(response.data);
      // console.log(response);
    })
    .catch(error => {console.log(error);})
});

// export default router;
module.exports = router;