import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { reduxStore } from "./Redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
