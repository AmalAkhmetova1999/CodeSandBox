import React, { useState, useContext } from "react";
import { LanguageContext } from "./App";
import "./CSS_Meny.css";
import "./little_Meny.css";
import "./main.css";
import basket from "./basket";
import myFunction from "./myFunction";

function Menu() {
  const languages = {
    en: {
      home: "Home",
      menu: "MENU",
      contact: "OPENING HOURS & CONTACT"
    },
    se: {
      home: "Hem",
      menu: "MENY",
      contact: "ÖPPETTIDER & KONTAKT"
    },
    ru: {
      home: "Главная",
      menu: "МЕНЮ",
      contact: "ВРЕМЯ РАБОТЫ И КОНТАКТЫ"
    }
  };

  const [click, setClick] = useState(false);

  const [language, setLanguage] = useContext(LanguageContext);
  console.log(`language`, language);

  return (
    <>
      <div>
        <div className="topnav">
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <li className="topnav-right">
              <a href="">{languages[language].home}</a>

              <div className="dropdown">
                <button onClick={myFunction} id="language" className="dropbtn">
                  <img
                    className="language"
                    src={require("./language.png")}
                    alt=""
                  />
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <button value="en" id="en" onClick={() => setLanguage("en")}>
                    EN
                  </button>
                  <button value="se" id="se" onClick={() => setLanguage("se")}>
                    SE
                  </button>
                  <button onClick={() => setLanguage("ru")}>RU</button>
                </div>
              </div>
            </li>

            <div className="right">
              <a href="" className="m">
                {languages[language].contact}
              </a>
              <a href="" className="m">
                {languages[language].menu}
              </a>
            </div>
            <button id="basketId">
              <img
                className="basket"
                src={require("./basket.png")}
                alt=""
                onClick={basket}
              />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
