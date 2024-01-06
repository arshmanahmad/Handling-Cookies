import React, { useState } from 'react'
import { createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {

    return (
        <Context.Provider value={{ data, setData, tableData, setTableData, links, setLinks, searchData, setSearchData, adminAccess, setAdminAccess }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export { Provider };