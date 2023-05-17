import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  // setSavedRepos([...savedRepos(), repo]);
  const current = savedRepos();
  if (!current.includes(repo)) {
    setSavedRepos([...current, repo]);
  }
};

const unsaveRepo = (repo: Repo) => {
  setSavedRepos(savedRepos()?.filter((r) => r.id !== repo.id));
};

const repoIsSaved = (repo: Repo) => {
  return savedRepos()?.some((r) => r.id === repo.id);
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {repoIsSaved(repo) ? (
          <button class="btn btn-danger" onClick={() => unsaveRepo(repo)}>
            Unsave
          </button>
        ) : (
          <button class="btn btn-success" onClick={() => saveRepo(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
