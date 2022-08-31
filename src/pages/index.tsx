import * as React from "react"
import type { HeadFC } from "gatsby"

import * as jose from 'jose'

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


  const handleFetchAppsData = React.useCallback(async () => {
    console.log(keyId, issuerId, apiKey)
    if (!keyId || !issuerId || !apiKey) return;

    const privateKey = await jose.importPKCS8(apiKey, 'ES256')

    // Create JWT
    const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
      .setIssuer(issuerId)
      .setIssuedAt()
      .setExpirationTime('5m')
      .setAudience('appstoreconnect-v1')
      .sign(privateKey);

      console.log(jwt)

    try {
      const response = await fetch('https://api.appstoreconnect.apple.com/v1/apps', {
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${jwt}`,
        }
      });

      console.log(response)

      if (!response.ok) return;

      const { data } = await response.json() as AppStoreConnectResponse;
      const nameData = data.map((app) => ({ name: app.attributes.name }));

      setAppsData(nameData)

    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <main>
      <Label>
        Key ID
        <input type="text" onChange={(event) => setKeyId(event.target.value)} />
      </Label>
      <Label>
        Issuer ID
        <input type="text" onChange={(event) => setIssuerId(event.target.value)} />
      </Label>
      <Label>
        API Key
        <input type="text" onChange={(event) => setApiKey(event.target.value)} />
      </Label>

      <button onClick={handleFetchAppsData}>Fetch Apps Data</button>

      <table>
        <thead>
          <tr>
            <th>App Name</th>
            <th>Version Code</th>
          </tr>
        </thead>

        <tbody>
          {appsData.map((appData) => (
            <tr>
              <td>{appData.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
