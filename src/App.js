import MenuAdd from "./MenuAdd";
import Menu from "./Menu";
import HomeComponent from "./HomeComponent";
import React, { useState, useContext } from "react";

const defaultLanguage = "br";
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Menu />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
