import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TopBar from './Component/TopBar/main';
import Home from './Page/home/Home';

function App() {
  // const { t, i18n } = useTranslation();
  // const handleClick = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // }
  return (
    <div className="App">
      {/* <Grid> */}
        <TopBar />
        <Home />
      {/* </Grid> */}
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
