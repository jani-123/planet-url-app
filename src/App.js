import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "redux-zero/react";
import { buscar } from "./actions";
import "./App.css";

const App = ({ planet }) => {
  return (
    <div className="interactions">
      <div className="title"><h2>Exoplanet Explore</h2></div>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          buscar();
        }}
      >
        <button type="submit" className="btn btn-lg btn-search">
          Search Planet
        </button>
      </form>
      <div>
        <div>
          {
            planet.map((value, index) => {
              return <div key={index} className="cajaPlanet">
                <ul >
                  <li>
                    <img src="https://www.bwf.com/wp-content/uploads/2013/11/earth2.png"/>
                    <p>{value.name}</p>
                    <p>{value.dens} ligthyears away</p>
                    <p>discovered in {value.year} with {value.descrip}</p>
                  </li>
                </ul>
              </div>;
            })
          }
        </div>
      </div>
    </div>
  );
};

const mapToProps = ({ planet }) => ({ planet });
export default connect(mapToProps)(App);
