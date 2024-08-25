import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

export const mount = (ele, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, ele);

  return {
    onParentNavigation({ pathname: nextPathname }) {
      const { pathname } = history.location;
      
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const rootEle = document.querySelector("#_marketing_main_ele");
  if (rootEle) {
    mount(rootEle, { defaultHistory: createBrowserHistory() });
  }
}
