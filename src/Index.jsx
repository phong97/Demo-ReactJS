import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Login from './Login';
import App from './App';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function Index() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js"
        defaultTitle="React.js"
      >
        <meta name="description" content="A React.js application" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/clock" component={App} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}
