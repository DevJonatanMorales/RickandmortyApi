import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inicio } from "./components/Inicio/Inicio";
import { Header } from "./components/Header/Header";
import { DataProvider } from "./context/DataContext";
import { Pagination } from "./components/Pagination/Pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Header />
      <Inicio />
      <Pagination />
    </DataProvider>
  </React.StrictMode>
);
