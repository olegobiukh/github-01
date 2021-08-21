import "./index.scss";

import React, { useState, useEffect } from "react";

import { uid } from "uid";
import { getRepos } from "../../api";

const Main = ({ setName, name }) => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    if (query) {
      getRepos(query, setRepos);
    } else {
      setQuery("");
      setRepos(null);
    }
  }, [query]);

  useEffect(() => {
    if (name) {
      setQuery("");
    }
  }, [name]);

  return (
    <section className={`main`}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for users"
        className={`main__input`}
      />
      <div className={`main_repos`}>
        {repos &&
          repos.map((item) => (
            <div
              key={uid()}
              className={`main_repos__item`}
              onClick={() => setName(item.login)}
            >
              <div className={`main_repos__block main_repos__block--left`}>
                <img
                  src={item.avatar_url}
                  alt="img1"
                  className={`main_repos__image`}
                />
                <div className={`main_repos__name`}>{item.login}</div>
              </div>
              <div className={`main_repos__block main_repos__block--right`}>
                Repo: ?
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Main;
