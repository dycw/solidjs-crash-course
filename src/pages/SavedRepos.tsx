import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const reposFromLocalStorage: Repo[] = JSON.parse(
  localStorage.getItem("savedRepos") || "[]",
);
const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={savedRepos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
