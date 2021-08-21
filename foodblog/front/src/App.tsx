import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CenterNav from './Component/CenterNav/main';
import TopBar from './Component/TopBar/main';
import Home from './Page/Home/Home';
import SectionOne from './Page/SectionOne/SectionOne';
import Single from './Page/Single/main';
import Write from './Page/Write/main';

function App() {
  // const { t, i18n } = useTranslation();
  // const handleClick = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // }
  return (
    <div className="App">
      <Router>
        <TopBar />
        {/* <Home /> */}
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Single}/>
            <Route path="/write" component={Write}/>
            <Route path="/abc" component={SectionOne}/>
          </Switch>
        </div>
        <CenterNav/>
      </Router>
      {/* <nav style={{ width: '100%', padding:'2rem 0', backgroundColor:'gray'}} />
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('ko')}>
          Korean
        </button>
        <button onClick={() => handleClick('chi')}>
          Chinese
        </button>
      <header className="App-header">
        <h1>{t('Thanks.1')}</h1>
        <h1>{t('Why.1')}</h1>
      </header> */}
    </div>
  );
}

export default App;
