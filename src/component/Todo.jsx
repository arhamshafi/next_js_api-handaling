"use client"
import React from 'react'
import { usetodos } from "@/context/Todo";


function Todo() {

    const {ok} = usetodos()
    console.log(ok);
    

    return (
        <div className='flex justify-between mt-8 items-center w-[50%] mx-auto  '>
            <input type="text" className='w-[80%] px-5 outline-none text-xl text-black h-[40px] rounded-md bg-white' />
            <button className='px-8 rounded-md py-[7px] text-white text-xl font-bold bg-blue-500'>ADD</button>
        </div>
    )
}

export default Todo
