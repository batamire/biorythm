import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { Router } from "@reach/router";
import { client } from "./setup";
import People from "./features/people";
import Graph from "./features/graph";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router>
        <People path="/" />
        <Graph path="graph/:id" />
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
