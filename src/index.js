import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const reactElement = document.getElementById("app");
const root = createRoot(reactElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
