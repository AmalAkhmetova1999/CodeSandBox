import React from "react";
import seeMenu from "./seeMenu";
import basket from "./basket";
import seeLittleMenu from "./seeLittleMenu";
import "./CSS_Meny.css";
import "./little_Meny.css";
import "./main.css";

function MenuAdd() {
  return (
    <section>
      <div className="text col-md-12">
        <h1> Meny </h1>
      </div>
      <div className="topnav">
        <a href="index.html">
          {" "}
          <b> Hem </b>
        </a>
        <div className="topnav-right">
          <div className="big">
            <button>
              <a href="index.html#kontakt">
                {" "}
                <b> ÖPPETTIDER & KONTAKT</b>
              </a>
            </button>
            <button className="btn little" onClick={seeMenu}>
              <a className="btn" href="#meny">
                {" "}
                MENY
              </a>
            </button>
            <button id="basketId">
              <img
                className="basket"
                src={require("./basket.png")}
                alt=""
                onClick={basket}
              />
            </button>
          </div>
          <div className="hidden">
            <button className="btn little" onClick={seeLittleMenu}>
              <a className="btn" href="#meny">
                {" "}
                MENY
              </a>
            </button>
            <button>
              <img
                className=" littleBasket"
                src={require("./basket.png")}
                alt=""
                onClick={basket}
              />
            </button>
          </div>
        </div>
      </div>

      <img
        className="img-fluid header"
        src="pizz.jpg"
        alt="pizza Tyreso Stockholm"
      />
    </section>
  );
}
export default MenuAdd;
