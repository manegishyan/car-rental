import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false) 
    
    const toggleOpenMenu = () => setMenuIsOpen((prev) => !prev)

    return (
        <DataContext.Provider value={{
            menuIsOpen,
            toggleOpenMenu
        }}>
            {children}
        </DataContext.Provider>
    )
}