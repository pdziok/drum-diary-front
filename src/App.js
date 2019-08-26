import React from 'react';
import { Helmet } from "react-helmet";

import './App.css';
import DailyPractice from './components/daily-practice';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grooveUtilsLoaded: false};
  }

  onScriptsLoaded = () => {
    setTimeout(() => {
      if (!!window.GrooveUtils) {
        this.setState({ grooveUtilsLoaded: true });
      }
    }, 100) //todo make it repeatable with lower duration until it's loaded
  };

  render() {
    return (
      <div className="App">
        <Helmet onChangeClientState={this.onScriptsLoaded}>
          <meta charSet="utf-8" />
          <title>Drum Diary</title>
          <script src="/dist/abc2svg-1.js" type="text/javascript" />
          <script src="/dist/groove_utils.js" type="text/javascript" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
        </Helmet>
        {
          this.state.grooveUtilsLoaded && <DailyPractice exercises={[{
            id: '1',
            gScribeUrl: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|',
            tempo: '100-130',
            startedAt: '2019-08-10T10:10:10Z',
            finishedAt: '2019-08-10T10:20:10Z'
          }]}/>
        }
      </div>
    );
  }
}

export default App;
