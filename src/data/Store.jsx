import React, { useState } from "react";

const initialstate = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialstate)

const Store = props => {
    const [state, setState] = useState(initialstate)

    function updateState(key, value) {
        setState({
           ...state,
           [key]: value
        })
    }

    return (
     <AppContext.Provider value={{
        number: state.number,
        text: state.text,
        setNumber: n => updateState('number', n),
        setNumber: n => updateState('text', n)
     }}>
         {props.children}
     </AppContext.Provider>
    )
}

export default Store 