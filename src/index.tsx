import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadServer, DevTools } from "jira-dev-tool";
import "antd/dist/antd.less";
import { AppProviders } from "./context/index";

loadServer(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProviders>
//     <App />
//     </AppProviders>

//   </React.StrictMode>,
//   document.getElementById("root")
// );
/**
 * ReactDOM.render(
    <React.StrictMode>
      <Profiler id={"Root App"} phases={["mount"]}>
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </Profiler>
    </React.StrictMode>,
    document.getElementById("root")
  )
*/
