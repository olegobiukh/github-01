import Details from "./container/Details";
import React, { useState, useEffect } from "react";

import Main from "./container/Main";
import "./index.scss";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1 className={`app__title`}>GitHub Searcher</h1>
      <Main setName={setName} name={name} />
      <Details setName={setName} name={name} />
    </div>
  );
}

export default App;
