import "../../src/index.css";
import React from 'react'


const Header = () => {
  return (
    <div className="flex flex-col h-screen px-5 py-10 text-center text-white bg-slate-400 text-7xl secHeader">
    <h1 className= "text-purple-500 ">Welcome to Party Supplies</h1>
    <p className="mt-4 text-3xl text-purple-300 ">Find everything you need to throw an amazing party!</p>
    <p className="mt-4 text-3xl text-purple-300 ">Created By Erick Esquilin</p>
  </div>
  )
}
export default Header