'use client'


import { useState } from "react"

export default function Layout(){
  const [contagemAtual,setContagemAtual] = useState(0)
  const Ativação = useState(true)

  function subirContagem(){
    

    setContagemAtual(contagemAtual + 1)

  }

  function descerContagem(){
    if(contagemAtual === 0){
        return
    }
    setContagemAtual(contagemAtual - 1)
  }
  function zerarContagem(){
    setContagemAtual(0)
  }
  return(
    <>
    <div className='text-white border-2 border-white-900'>
      <h1>Timer</h1>
      <p>{contagemAtual}</p>
      <button onClick={subirContagem} className="bg-green-500 text-white p-4">Subir</button>
      <button onClick={descerContagem} className='bg-red-500 text-white p-4'>Descer</button>
      <button onClick={zerarContagem} className="bg-gray-700">Zerar</button>
    </div>
    </>
  )
}