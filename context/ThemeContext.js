import {createContext, useState} from "react"
import {Appearance} from "react-native"
import {Colors} from "../constants/Colors"

export const ThemeContext=createContext({});

export const ThemeProvider = ({children})=>{
    //get the color scheme from the system and store in colorScheme (light or dark)
    const [colorScheme,setColorScheme]=useState(Appearance.getColorScheme());

    const theme = colorScheme ==='dark' ? Colors.dark : Colors.light;

    return (
        <ThemeContext.Provider value={{
            colorScheme,setColorScheme,theme
        }}> 
        {/* children/components can access the value passed */}
            {children}
        </ThemeContext.Provider>
    )
}

