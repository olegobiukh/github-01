import "./index.scss";

import React, { useState, useEffect } from "react";

import { uid } from "uid";
import { getRepos } from "../../api";

const Main = ({ setName, name }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
   
  }, []);
  

  return (
    <section className={`main`}>
     
    </section>
  );
};

export default Main;
