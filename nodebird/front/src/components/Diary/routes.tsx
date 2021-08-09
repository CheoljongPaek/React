import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Note from './Page/Note';
import CreateNote from './Page/CreateNote';


const DiaryRoutes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/menu/diary" render={() => <Note />} />
        <Route path="/menu/diary/:type" render={() => <CreateNote />} />
      </Switch>
    </>
  )
};

export default DiaryRoutes;