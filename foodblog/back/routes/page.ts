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

// export default router;
module.exports = router;