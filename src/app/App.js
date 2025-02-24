import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./layouts/mainPage";
import Movies from "./layouts/movies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie_page/:movieId?" element={<Movies />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
