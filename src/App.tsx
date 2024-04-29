import React, { useState } from "react";
import { Content, Tabs } from "./components";
import "./styles/index.css";

const App: React.FC = () => {
  const [tabSelected, setTabSelected] = useState<number>(0);
  return (
    <div className="container">
      <div className="row">
        <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} />
      </div>
      <div className="row">
        <Content tabSelected={tabSelected} />
      </div>
    </div>
  );
};

export { App };
