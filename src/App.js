import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "redux-zero/react";
//import { buscar } from "./actions";
import "./App.css";

const App = ({planet}) => {
  return (
    <div className="interactions">
      <div>
        <div>
          {
            planet.map((value,index) =>{
                return <div>
                    <ul key={index}>
                      <li>
                        <img src="https://www.bwf.com/wp-content/uploads/2013/11/earth2.png" />
                        <p>{value.pl_name}</p>
                        <p>{value.pl_disk}</p>
                        <p>{value.pl_dens}</p>
                      </li>
                    </ul>
                  </div>;
            })
          }
        </div>
      </div>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          
        }}
      >
        <button type="submit" className="btn btn-default">
          Search
        </button>
      </form>
      
    </div>
  );
};

const mapToProps = ({ planet }) => ({ planet });

export default connect(mapToProps)(App);
