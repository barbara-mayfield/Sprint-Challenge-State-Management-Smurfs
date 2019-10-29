import React, { useEffect } from "react";
import { connect } from'react-redux';

import { getSmurfs } from './actions/index'
import Smurf from './Smurf/Smurf'
import NewSmurfForm from './Smurf/NewSmurfForm'

import "./App.css";
  function App({ getSmurfs, smurfs, error, isLoading }) {
  useEffect(() => {
    getSmurfs();
  }, [])

  console.log(getSmurfs)

    return (
      <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
            {smurfs.map((smurf, index) => (
            <Smurf key={index} smurf={smurf} />
            ))}
            <NewSmurfForm />
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs })
  (App);
