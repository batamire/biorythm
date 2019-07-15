import React from "react";
import { Router } from "@reach/router";
import { client } from "./setup";
import { Dashboard } from "./features/people";
import { Graph } from "./features/graph";
import { ApolloProvider } from "react-apollo";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Dashboard path="/" />
      <Graph path="graph/:id" />
    </Router>
  </ApolloProvider>
);

export default App;
