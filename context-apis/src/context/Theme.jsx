import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null)
const Theme = (props) => {
    const [theme,setTheme] = useState(0)
    
return (
    <ThemeContext.Provider value={[theme,setTheme]}>
        {props.children}
    </ThemeContext.Provider>
)
}

export default Theme