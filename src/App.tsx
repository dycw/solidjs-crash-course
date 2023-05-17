import type { Component } from "solid-js";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SavedRepos from "./pages/SavedRepos";
import { Route, Routes } from "solid-app-router";

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/savedrepos" element={<SavedRepos />}></Route>
      </Routes>
    </div>
  );
};

export default App;
