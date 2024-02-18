import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRoute from "./App";
import { Provider } from "react-redux";
import reduxStore from "./Redux/ReduxStore";

const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={reduxStore}>
      <RouterProvider router={AppRoute} />
    </Provider>
  );
} else {
  throw new Error("Target container is not dom element");
}
