import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import MovieDetail from "./components/MovieDetail";
import Signup from "./routes/Signup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="users" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
