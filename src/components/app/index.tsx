import React from 'react';
import * as jose from 'jose';
import {
  Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import KeyForm from '../keyForm';

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

interface IAppStoreListApps {
  data: IApp[];
}

interface IAppStoreAppData {
  data: IApp;
}

const App = () => {
  const [appsData, setAppsData] = React.useState<AppData[]>([]);
  const [keyId, setKeyId] = React.useState<string>('');
  const [issuerId, setIssuerId] = React.useState<string>('');
  const [apiKey, setApiKey] = React.useState<string>('');
  const [errorText, setErrorText] = React.useState<string>('');
  const [jwt, setJwt] = React.useState<string>('');

  const attemptJwtCreation = React.useCallback(async () => {
    if (!keyId || !issuerId || !apiKey) return;

    const privateKey = await jose.importPKCS8(apiKey, 'ES256');

    // Create JWT
    const newJwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
      .setIssuer(issuerId)
      .setIssuedAt()
      .setExpirationTime('5m')
      .setAudience('appstoreconnect-v1')
      .sign(privateKey);

    setJwt(newJwt);
  }, [keyId, issuerId, apiKey, setAppsData]);

  React.useEffect(() => {
    attemptJwtCreation();
  }, [attemptJwtCreation]);

  // const fetchAppData = React.useCallback(async (appId: string) => {
  //   if (!jwt) return;

  //   const response = await fetch(`http://localhost:3000/app/${appId}`, {
  //     headers: {
  //       Authorization: `Bearer ${jwt}`,
  //     },
  //   });

  //   if (!response.ok) {
  //     console.error(response);

  //     setErrorText(`The response code was ${response.status}. Full error logged to console.`);

  //     return;
  //   }

  //   const { data } = await response.json() as IAppStoreAppData;

  //   debugger;

  //   const nameData = data.map((app) => ({ name: app.attributes.name }));
  // }, [jwt]);

  const fetchAppsData = React.useCallback(async () => {
    if (!jwt) return;

    try {
      const response = await fetch('http://localhost:3000/apps', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) {
        console.error(response);

        setErrorText(`The response code was ${response.status}. Full error logged to console.`);

        return;
      }

      const responseJson = await response.json() as IAppStoreListApps;
      const { data } = responseJson;

      debugger;

      const nameData = data.map((app) => ({ name: app.attributes.name }));

      setAppsData(nameData);
    } catch (error) {
      console.error(error);

      const message = (error as Error)?.message ?? 'unknown';
      setErrorText(`Error: ${message}. Full error logged to console.`);
    }
  }, [jwt]);

  React.useEffect(() => {
    fetchAppsData();
  }, [fetchAppsData]);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography gutterBottom component="h1" variant="h1">Fetch App Versions</Typography>

        <KeyForm
          apiKey={apiKey}
          issuerId={issuerId}
          keyId={keyId}
          setApiKey={setApiKey}
          setIssuerId={setIssuerId}
          setKeyId={setKeyId}
        />

        {errorText && <h3>{errorText}</h3>}

        <Button variant="contained" onClick={fetchAppsData}>Refetch Data</Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>App Name</TableCell>
                <TableCell>Version Code</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {appsData.map((appData) => (
                <TableRow key={appData.name}>
                  <TableCell>{appData.name}</TableCell>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default App;
