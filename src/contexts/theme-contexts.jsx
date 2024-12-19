import { createContext, useState } from "react";

export const themes = {
    light: {
        backgroundColor1: 'silver',
        backgroundColor2: '#eeeeee',
        color1: '#000000',
        color2:'#000000'
    },

    dark: {
        backgroundColor1: '#313131',
        backgroundColor2: 'silver',
        color1: '#ffffff',
        color2: '#000000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)
    
    return(
        <div>
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
        </div>
    )
}