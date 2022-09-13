import React from 'react';
import * as jose from 'jose';

import CssBaseline from '@mui/material/CssBaseline';

// Types
import type { HeadFC } from 'gatsby';
import App from '../components/app';

const IndexPage = () => (
  <>
    <CssBaseline />
    <App />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
