import React, { useState, useContext } from "react";
import { LanguageContext } from "./App";

const HomeComponent = () => {
  const [language] = useContext(LanguageContext);
  console.log(`language`, language);

  return (
    <div>
      <h1>HomeComponent</h1>
      <h1>Current Language is: {language}</h1>
    </div>
  );
};

export default HomeComponent;
