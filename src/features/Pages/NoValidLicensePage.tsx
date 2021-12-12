import React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Panel } from '@erkenningen/ui/layout/panel';

const NoValidLicensePage: React.FC = () => {
  return (
    <Panel title="Geen geldige licentie">
      <Alert type="warning">
        U heeft geen geldige licentie(s) om &apos;Adviseren Gewasbescherming&apos; aan te vragen.
        <br />
        U kunt zich inschrijven bij een HBO instelling voor opleiding &quot;Adviseren
        Gewasbescherming&quot;
        <br />
        <br />
        De volgende scholen bieden deze opleiding aan:
        <br />
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Aeres Hogeschool Dronten</td>
              <td>Mw. Bettie Tijsseling</td>
              <td>
                <a href="www.aereshogeschool.nl">www.aereshogeschool.nl</a>
              </td>
            </tr>
            <tr>
              <td>HAS Den Bosch</td>
              <td>Dhr. Toine Hattink</td>
              <td>
                <a href="www.hashogeschool.nl">www.hashogeschool.nl</a>
              </td>
            </tr>
            <tr>
              <td>In Holland Delft</td>
              <td>Mw. Marja den Toom</td>
              <td>
                <a href="www.inholland.nl">www.inholland.nl</a>
              </td>
            </tr>
            <tr>
              <td>Van Hall Larenstein Leeuwarden</td>
              <td>Dhr. Bart Wezeman</td>
              <td>
                <a href="www.hvhl.nl">www.hvhl.nl</a>
              </td>
            </tr>
          </tbody>
        </table>
        Loket Adviseren gewasbescherming namens de gezamenlijke HBO&apos;s: Wordt nog bekend
        gemaakt...
      </Alert>
    </Panel>
  );
};

export default NoValidLicensePage;
