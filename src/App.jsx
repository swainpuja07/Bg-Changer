import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>
            red
          </button>
          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>
            blue
          </button>
          <button 
          onClick={() => setColor("Pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>
            pink
          </button>
          <button 
          onClick={() => setColor("aqua")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"aqua"}}>
            aqua
          </button>
          <button 
          onClick={() => setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>
            orange
          </button>
          <button 
          onClick={() => setColor("violet")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>
            violet
          </button>
          <button 
          onClick={() => setColor("lightgreen")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lightgreen"}}>
            lightgreen
          </button>
          </div>
        </div>
      </div>
  
  )
}

export default App
