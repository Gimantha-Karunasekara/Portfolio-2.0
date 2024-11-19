import { createContext, useState } from "react";

export const ThemeContext = createContext({
    darkTheme: true,
    toggleTheme: () => { }
});

const ThemeContextProvider = (props) => {
    const [darkMode, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        if (!darkMode) {
            document.body.classList.add('dark-theme');
        }
        else{
            document.body.classList.remove('dark-theme');
        }
        setDarkTheme((prevState) => !prevState);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme: darkMode, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;