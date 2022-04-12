import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Intro } from "./pages/Intro";

const SpaceContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #111;
  color: #fff;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} >
      <SpaceContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </SpaceContainer>
    </ApolloProvider>
  );
}

export default App;
