import { createContext, useState } from "react";

export const CityContext=createContext()


export const CityContextProvider=({children})=>{
    const [city,setCity]=useState("Delhi")

    const value={
        city,setCity
    }

    return(
        <CityContext.Provider value={value}>
            {children}
        </CityContext.Provider>
    )
}