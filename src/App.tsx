import { Component, createEffect, createSignal } from "solid-js";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SavedRepos from "./pages/SavedRepos";
import { Route, Routes } from "solid-app-router";

const [username, setUsername] = createSignal("dycw");
const [repos, setRepos] = createSignal([]);

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch(
      `https://api.github.com/users/${username()}/repos?sort=updated`,
    );
    setRepos(await res.json());
  });

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

export { username, setUsername, repos, setRepos };
export default App;
