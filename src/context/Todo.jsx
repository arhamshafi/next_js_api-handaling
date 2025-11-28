"use client"

const { createContext, useContext, useState } = require("react")

const Todo_Context = createContext()

export const TodoProvider = ({ children }) => {

    const [ok, setok] = useState("working..")

    return (
        
        <Todo_Context.Provider value={{ ok }} > {children} </Todo_Context.Provider>
    )
}

export function usetodos() { return useContext(Todo_Context) }