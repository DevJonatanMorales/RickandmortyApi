import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inicio } from "./components/Inicio/Inicio";
import { Header } from "./components/Header/Header";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <Inicio />
    </Provider>
  </React.StrictMode>
);
