import React from 'react'

export const GlobalProvider = React.createContext();

const ContextApi = ({ children }) => {
    const [isNightMode, setIsNightMode] = React.useState(true);
    return (
        <GlobalProvider.Provider value={{ isNightMode,setIsNightMode }}>{children}</GlobalProvider.Provider>
    )
}

export default ContextApi;
