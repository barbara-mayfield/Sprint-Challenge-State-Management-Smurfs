import React, { useEffect } from "react";

import { connect } from'react-redux';
import { getSmurf } from './actions/smurf'
import SmurfList from './Smurf/SmurfList'
import NewSmurfForm from './Smurf/NewSmurfForm'

import "./App.css";
  function App(props) {
  useEffect(() => {
    props.getSmurf();
  }, [getSmurf])

    return (
      <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>

          <div className="smurf">
            <h3>List of Smurfs</h3>
            <SmurfList 
                      name={props.name}
                      age={props.age}
                      height={props.height} 
            />
            <NewSmurfForm />
          </div>
      </div>
    );
  }


function mapStateToProps(state){
  return {
    smurfs: state.smurfs,
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
