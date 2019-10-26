import React, { useEffect } from "react";

import { connect } from'react-redux';
import { getSmurf } from './actions/smurf'
import SmurfList from './Smurf/SmurfList'
import SmurfForm from './Smurf/NewSmurfForm'

import { FormContext } from './contexts/FormContext'

import "./App.css";
  function App(props) {
  useEffect(() => {
    props.getSmurf();
  }, [])

    return (
      <div className="App">
        <FormContext.Provider>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </FormContext.Provider>
      </div>
    );
  }


function mapStateToProps(state){
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = {
  getSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
