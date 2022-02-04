import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import container from "./container"


class Container extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <Route exact={true} path={"/"} component={container} />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default Container;