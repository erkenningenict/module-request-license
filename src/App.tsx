import * as React from 'react';

import { ThemeContext } from '@erkenningen/ui/layout/theme';
import { HashRouter, Route } from 'react-router-dom';

import LicenseForm from './features/LicenseForm/LicenseForm';
import NoValidLicensePage from './features/Pages/NoValidLicensePage';

import '@fortawesome/fontawesome-free/css/all.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import { ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import './App.css';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
        <div className="App">
          <HashRouter>
            <>
              <Route path="/" component={LicenseForm} />
              <Route path="/no-valid-license" component={NoValidLicensePage} />
            </>
          </HashRouter>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
