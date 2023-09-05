import React, {createContext, useReducer, useEffect, useState} from 'react';
import axios from "axios";
const MyContext = createContext();

function Context({children}) {

    const [data, setData] = useState([]);

    const instance = axios.create({
        baseURL:`${process.env.React_App_Server}`
    })


    const fetchFn = async (type, data) => {
        let res;
        switch (type) {
            case "post" :
                res = await instance.post("/insert", data);
                break;
            case "del" :
                res = await instance.delete(`/abc/${data}`)
                break;
            default :
                res = await instance.get("/abc");
        }
        setData(res.data);
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