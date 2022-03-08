import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route exact path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
