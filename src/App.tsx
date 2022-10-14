import { useAuth } from "context/auth-context";
import React from "react";
import "./App.css";
// import { ProjectListScreen } from "./screens/project-list";
// import { TsReactTest } from "./try-use-array";
// import { LoginScreen } from "./screens/login";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  // return <ProjectListScreen />;
  // return <TsReactTest />;
  // return <LoginScreen />;
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
