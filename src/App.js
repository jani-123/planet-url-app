import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "redux-zero/react";
import { search } from "./actions";
import './App.css';

const App = () =>{
  return (
    <div className="interactions">
       <form className="form-inline" onSubmit={ (e) => {
          e.preventDefault();
          search();
       }}>
          <button type="submit" className="btn btn-default">Search</button>
       </form>
    </div>);
}

const mapToProps = ({app}) => ({app});

export default connect(mapToProps)(App);
