import React from 'react';

import { ThemeContext } from '@erkenningen/ui/layout/theme';
import { HashRouter, Route, Routes } from 'react-router-dom';

import LicenseForm from './features/LicenseForm/LicenseForm';
import NoValidLicensePage from './features/Pages/NoValidLicensePage';

import '@fortawesome/fontawesome-free/css/all.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import { ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import './App.css';
import { GrowlProvider } from '@erkenningen/ui/components/growl';

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
      <div className="App">
        <GrowlProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<LicenseForm />} />
              <Route path="/no-valid-license" element={<NoValidLicensePage />} />
            </Routes>
          </HashRouter>
        </GrowlProvider>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
