import { createContext } from 'react';

export const themeContext = createContext();
const ThemeContext = (props) => {

    return (
        <div>
            <themeContext.Provider value="Shamir">
                <h1>Theme</h1>
                <h1>{props.children}</h1>
            </themeContext.Provider>

        </div>
    )
}

export default ThemeContext
