"use client";

import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function ApolloContextProvider({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloContextProvider;
