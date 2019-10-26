import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newSmurf } from '../actions/smurf'

 function NewSmurfForm(props) {
    const [smurf, addSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e => {
        e.preventDefault()
        addSmurf({...smurf, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        props.newSmurf(smurf);
        addSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={smurf.name} 
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={smurf.age} 
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={smurf.height}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}

export default connect(null)(NewSmurfForm);