import { Component } from "solid-js";
import { repos, setUsername, username } from "../App";
import { For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput",
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={refetchWithUsername}>
        <input
          type="text"
          class="p-1 align-middle"
          id="usernameInput"
          required
        />
        <button class="btn btn-dark ms-3 w-auto">Fetch</button>
      </form>
      <h3>GitHub repos for {username()}</h3>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
