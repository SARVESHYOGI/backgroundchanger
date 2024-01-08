import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("pink")


  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className='text-white font-extrabold text-2xl flex justify-center align-bottom w-full h-screen'>
        <button
          onClick={() => { setColor("red") }}
          className='m-2 p-4 bg-red-400 h-max rounded-full border-4 border-black'>red</button>
        <button
          onClick={() => { setColor("orange") }}

          className='m-2 p-4 bg-orange-400 h-max rounded-full border-4 border-black'>orange</button>
        <button
          onClick={() => { setColor("yellow") }}

          className='m-2 p-4 bg-yellow-400 h-max rounded-full border-4 border-black'>yellow</button>
        <button
          onClick={() => { setColor("pink") }}

          className='m-2 p-4 bg-pink-400 h-max rounded-full border-4 border-black'>pink</button>

        <button
          onClick={() => { setColor("white") }}

          className='m-2 p-4 bg-white h-max rounded-full border-4 border-black text-black'>white</button>
        <button
          onClick={() => { setColor("black") }}

          className='m-2 p-4 bg-black h-max rounded-full border-4 border-white'>black</button>

        <button
          onClick={() => { setColor("blue") }}

          className='m-2 p-4 bg-blue-400 h-max rounded-full border-4 border-black'>blue</button>

      </div>
    </>
  )
}

export default App
