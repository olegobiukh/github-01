import "./index.scss";

import React, { useState, useEffect } from "react";

import { uid } from "uid";
import { getUserRepos, getUser } from "../../api";

const Details = ({ name, setName }) => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    if (name) {
      getUser(name, setParams);
      getUserRepos(name, setRepos);
    } else {
      setParams(null);
      setRepos(null);
      setQuery("");
    }
  }, [name]);

  return (
    <section className={`details ${name ? "details--active" : ""}`}>
      <button className={`details__button`} onClick={() => setName("")}>
        &#8592;
      </button>
      {params && (
        <>
          <div className={`details_params`}>
            <img
              src={params.avatar_url}
              alt="logo"
              className={`details_params__image`}
            />
            <ul className={`details_params__list`}>
              <li className={`details_params__item`}>
                <strong>Username: </strong>
                {params.login}
              </li>
              <strong>Email: </strong>
              <li className={`details_params__item`}>{params.email}</li>
              <li className={`details_params__item`}>
                <strong>Location: </strong>
                {params.location ? params.following : "-"}
              </li>
              <li className={`details_params__item`}>
                <strong>Join date: </strong>
                {params.created_at
                  ? params.created_at
                      .substr(0, "2012-07-28T09:40:17Z".indexOf("T"))
                      .split("-")
                      .reverse()
                      .join(".")
                  : "-"}
              </li>
              <li className={`details_params__item`}>
                <strong>Followers: </strong>
                {params.followers ? params.followers : 0}
              </li>
              <li className={`details_params__item`}>
                <strong>Following: </strong>
                {params.following ? params.following : 0}
              </li>
              <li className={`details_params__item`}>
                <strong>Repos: </strong>
                {params.public_repos ? params.public_repos : 0}
              </li>
            </ul>
          </div>
          <div className={`details_params__bio`}>{params.bio}</div>
          <div className={`details_repos`}>
            <input
              className={`details_repos__input`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for users"
            />
            <div className={`details_repos__list`}>
              {repos
                ? repos
                    .filter((item) =>
                      query ? item.name.includes(query) : item
                    )
                    .map((item) => (
                      <div key={uid()} className={`details_repos__item`}>
                        <div
                          className={`details_repos__block details_repos__block--left`}
                        >
                          {item.name}
                        </div>
                        <div
                          className={`details_repos__block details_repos__block--right`}
                        >
                          <div>{item.stargazers_count} Forks</div>
                          <div>{item.forks_count} Stars</div>
                        </div>
                      </div>
                    ))
                : ""}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
