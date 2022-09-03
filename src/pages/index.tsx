import React from 'react';
import type { HeadFC } from 'gatsby';

import * as jose from 'jose';

type AppData = {
  name: string;
}

interface IAppAttributes {
  bundleId: string;
  name: string;
}

interface IApp {
  type: string;
  id: string;
  attributes: IAppAttributes;
}

interface AppStoreConnectResponse {
  data: IApp[];
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <label style={{ display: 'block' }}>{children}</label>
);

const IndexPage = () => {
  const [appsData, setAppsData] = React.useState<AppData[]>([]);
  const [keyId, setKeyId] = React.useState<string>('');
  const [issuerId, setIssuerId] = React.useState<string>('');
  const [apiKey, setApiKey] = React.useState<string>('');
  const [errorText, setErrorText] = React.useState<string>('');

  const handleFetchAppsData = React.useCallback(async () => {
    if (!keyId || !issuerId || !apiKey) return;

    const privateKey = await jose.importPKCS8(apiKey, 'ES256');

    // Create JWT
    const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
      .setIssuer(issuerId)
      .setIssuedAt()
      .setExpirationTime('5m')
      .setAudience('appstoreconnect-v1')
      .sign(privateKey);

    try {
      const response = await fetch('http://localhost:3000', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) {
        console.error(response);

        setErrorText(`The response code was ${response.status}. Full error logged to console.`);

        return;
      }

      const { data } = await response.json() as AppStoreConnectResponse;

      debugger;

      const nameData = data.map((app) => ({ name: app.attributes.name }));

      setAppsData(nameData);
    } catch (error) {
      console.error(error);

      const message = (error as Error)?.message ?? 'unknown';
      setErrorText(`Error: ${message}. Full error logged to console.`);
    }
  }, [keyId, issuerId, apiKey, setAppsData]);

  return (
    <main>
      <Label>
        Key ID
        <input
          type="text"
          onFocus={() => {
            if (keyId) return;

            const storedKeyID = localStorage.getItem('KeyID');

            if (storedKeyID) setKeyId(storedKeyID);
          }}
          onChange={(event) => {
            const { value } = event.target;

            localStorage.setItem('KeyID', value);

            setKeyId(value);
          }}
          value={keyId}
        />
      </Label>
      <Label>
        Issuer ID
        <input
          type="text"
          onFocus={() => {
            if (issuerId) return;

            const storedIssuerID = localStorage.getItem('IssuerID');

            if (storedIssuerID) setIssuerId(storedIssuerID);
          }}
          onChange={(event) => {
            const { value } = event.target;

            localStorage.setItem('IssuerID', value);

            setIssuerId(value);
          }}
          value={issuerId}
        />
      </Label>
      <Label>
        API Key
        <textarea
          onFocus={() => {
            if (apiKey) return;

            const storedApiKey = localStorage.getItem('APIKey');

            if (storedApiKey) setApiKey(storedApiKey);
          }}
          onChange={(event) => {
            const { value } = event.target;

            localStorage.setItem('APIKey', value);

            setApiKey(value);
          }}
          value={apiKey}
        />
      </Label>

      <button type="button" onClick={handleFetchAppsData}>Fetch Apps Data</button>

      {errorText && <h3>{errorText}</h3>}

      <table>
        <thead>
          <tr>
            <th>App Name</th>
            <th>Version Code</th>
          </tr>
        </thead>

        <tbody>
          {appsData.map((appData) => (
            <tr key={appData.name}>
              <td>{appData.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
