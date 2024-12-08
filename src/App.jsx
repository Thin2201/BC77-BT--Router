import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Productmanagement from "./Router/Productmanagement";
import Index from "./Router/Index";
import Createproduct from "./Router/Createproduct";
import Updateproduct from "./Router/Updateproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productmanagement />}>
          <Route index element={<Index />} />
          <Route
            path="/product-management/create-product"
            element={<Createproduct />}
          />
          <Route
            path="/product-management/update-product"
            element={<Updateproduct />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
