import React from "react";
import { Router } from "@reach/router";
import { client } from "./setup";
import { Dashboard } from "./features/people";
import { ApolloProvider } from "react-apollo";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Dashboard path="/" />
    </Router>
  </ApolloProvider>
);

export default App;
