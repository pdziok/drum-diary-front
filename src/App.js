import React from 'react';
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


import './App.css';
import Layout from './components/layout'
import { GrooveUtilsContext } from './contexts';

const theme = createTheme();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grooveUtilsLoaded: false};
  }

  onScriptsLoaded = () => {
    if (this.loader) {
      clearInterval(this.loader);
    }
    this.loader = setInterval(() => {
      if (!!window.GrooveUtils) {
        this.setState({grooveUtilsLoaded: true});
        clearInterval(this.loader);
      }
    }, 10); //todo add limiter for N executions and display loading gscribe error to user
  };

  render() {
    // noinspection HtmlUnknownTarget
    return (
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Router>
            <div className="App">
              <Helmet onChangeClientState={this.onScriptsLoaded}>
                <meta charSet="utf-8"/>
                <title>Drum Diary</title>
                <script src="/dist/abc2svg-1.js" type="text/javascript"/>
                <script src="/dist/groove_utils.js" type="text/javascript"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet"/>
              </Helmet>
              <GrooveUtilsContext.Provider value={this.state.grooveUtilsLoaded}>
                <Layout/>
              </GrooveUtilsContext.Provider>
            </div>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    );
  }
}

export default App;
