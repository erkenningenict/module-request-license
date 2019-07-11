import * as React from 'react';

import { ThemeContext } from '@erkenningen/ui';
import { HashRouter, Route } from 'react-router-dom';

import LicenseForm from './features/LicenseForm/LicenseForm';
import NoValidLicensePage from './features/Pages/NoValidLicensePage';

import '@fortawesome/fontawesome-free/css/all.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import './App.scss';

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ThemeContext.Provider value={{ mode: 'student' }}>
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
