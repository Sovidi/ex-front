import React, {createContext, useReducer, useEffect} from 'react';
import axios from "axios";

const MyContext = createContext();

const insert = (state, action) => {
    switch (action.type) {
        case "post" : return [...state, action.d.data];
        default : return action.d.data;
    }
}

function Context({children}) {

    const [data, dispatch] = useReducer(insert, [])

    const instance = axios.create({
        baseURL:`${process.env.React_App_Server}`
    })


    const fetchFn = async (type, data) => {
        let res;
        switch (type) {
            case "post" :
                res = await instance.post("/insert", data);
                break;
            default :
                res = await instance.get("/abc");
        }
        dispatch({type, d: res})
    }

    useEffect(()=> {
        fetchFn();
    })

    return (
        <MyContext.Provider value={{data, fetchFn}}>
            {children}
        </MyContext.Provider>
    )
}

export {Context, MyContext}