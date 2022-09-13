import React from 'react';

import { Box, TextField } from '@mui/material';

import Props from './interface';

const KeyForm = ({
  apiKey, issuerId, keyId, setApiKey, setIssuerId, setKeyId,
}: Props) => (
  <>
    <Box sx={{ display: 'flex', mb: 2 }}>
      <TextField
        multiline
        label="Key ID"
        sx={{ flex: 1, mr: 1 }}
        value={keyId}
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
      />
      <TextField
        multiline
        label="Issuer ID"
        sx={{ flex: 1, ml: 1 }}
        value={issuerId}
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
      />
    </Box>

    <Box sx={{ display: 'flex', mb: 2 }}>
      <TextField
        multiline
        label="API Key"
        sx={{ flex: 1 }}
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
    </Box>
  </>
);

export default KeyForm;
