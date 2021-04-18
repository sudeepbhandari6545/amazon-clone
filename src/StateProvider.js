import React, { createContex, useContext, useReducer } from 'react';

// prepare the data layer
export const StateContext = createContex();

// wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children })=>{
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider></StateContext.Provider>
};

// pull information from datalayer
export const useStateValue =()=>useContext(StateContext);
