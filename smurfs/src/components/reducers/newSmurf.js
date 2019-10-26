export const initialState = {
    smurfs: [{
    name: "",
    age: "",
    height: ""}]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_SMURF":
            const newSmurf = {
                name: "",
                age: "",
                height: ""
                }
                return {
                    ...state, smurfs: [...state.smurfs, newSmurf]
            }
        default: 
            return state
    }
}