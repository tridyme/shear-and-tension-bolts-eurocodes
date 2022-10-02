import React, { Component, useState } from 'react';
import Helmet from 'react-helmet';
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import history from './history';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import AppContainerElem from './Components/AppContainerElem';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import Icon from './Icon.png';
import Logo from './Logo.png';
import BoltAnalysis from './Views/BoltAnalysis/BoltAnalysis';

const Menu = {
  MenuNavBar: [
    { text: "", link: "", href: "", icon: "" }
  ],
  MenuSideBarSup: [
    { text: "Home", link: "", href: "https://app.tridyme.com/marketplace", icon: "dashboard" },
  ],
  MenuSideBarInf: [
    { text: "GitHub", link: "", href: "https://github.com/tridyme/shear-and-tension-bolts-eurocodes", icon: "code" },
    { text: "Documentation", link: "", href: "https://www.notion.so/Documentation-Technique-685a1bd160bb44ca86e7fa782b75276e", icon: "help" },
  ],
};

const App = ({
  hideMenu
}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            //light: '#0066ff',
            main: '#ff0000',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
          },
        },

      }),
    [prefersDarkMode],
  );

  return (
    <div>

      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{`TriDyme | Shear and Tension Bolts at Eurocodes`}</title>
          <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
        </Helmet>
        <Router history={history}>
          {hideMenu ?
            <Switch>
              <Route exact path="/shear-and-tension-bolts-eurocodes" component={BoltAnalysis} />
              <Redirect from="/" to="/shear-and-tension-bolts-eurocodes" />
            </Switch>
            :
            <AppContainerElem
              title={<ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={`TriDyme | Shear and Tension Bolts at Eurocodes`}
                    src={Icon}
                  />
                </ListItemAvatar>
                <ListItemText primary={`TriDyme | Shear and Tension Bolts at Eurocodes`} />
              </ListItem>}
              menu={Menu}
            >
              <Switch>
                <Route exact path="/shear-and-tension-bolts-eurocodes" component={BoltAnalysis} />
                <Redirect from="/" to="/shear-and-tension-bolts-eurocodes" />
              </Switch>
            </AppContainerElem>
          }
        </Router>
      </ThemeProvider>
    </div>

  );

};

export default App;
