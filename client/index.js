import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/app.js";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const apolloClient = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={App} />
        </Route>
        <Route path="songs/create" component={SongCreate} />
        <Route path="songs/:id" component={SongDetail} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
