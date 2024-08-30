import type { ReactNode } from "react";

import { FatalErrorBoundary, RedwoodProvider } from "@redwoodjs/web";
import possibleTypes from "src/graphql/possibleTypes";
import { RedwoodApolloProvider } from "@redwoodjs/web/apollo";

import FatalErrorPage from "src/pages/FatalErrorPage";

import { AuthProvider, useAuth } from "./auth";

import "./index.css";
import "./scaffold.css";

interface AppProps {
  children?: ReactNode;
}

const graphQLClientConfig = {
  cacheConfig: {
    possibleTypes: possibleTypes.possibleTypes,
  },
};

const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodApolloProvider
          useAuth={useAuth}
          graphQLClientConfig={graphQLClientConfig}
        >
          {children}
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

export default App;
