'use client'


import { useState } from "react"
import { useEffect } from "react"

export default function Layout(){
  const [contagemSegundos,setContagemSegundos] = useState(0)
  const [AtivaçãoTimer,setAtivaçãoTimer] = useState(false)
  const [textoDoPause, setTextoDoPause] = useState('Iniciar')
  const [corDoTexto, setCordoTexto] = useState('text-white')


  function zerarContagem(){

    setContagemSegundos(0)
    setTextoDoPause('Iniciar')
    setCordoTexto('text-white')
  }

  function pausarDespausar(){
    const interruptor = !AtivaçãoTimer
    setAtivaçãoTimer(interruptor)

    if(interruptor === false){
      setTextoDoPause('Iniciar')
    }

    else{
      setTextoDoPause('Pausar')
    }
  }
  //funcao Principal:
  useEffect(() => {

  if (AtivaçãoTimer === false) {
    return
  }

  const intervalo = setInterval(() => {
      setContagemSegundos((ValorAtual)=> ValorAtual + 1)
  }, 1000)

  return () => {
    clearInterval(intervalo)
  }

}, [AtivaçãoTimer])


  return(
    <>
    <div className='text-white border-2 border-white-900'>
      <h1>Timer</h1>
      <p>{contagemSegundos}</p>
      <button onClick={zerarContagem} className="bg-gray-700">Zerar</button>
      <button  onClick={pausarDespausar}>{textoDoPause}</button>
    </div>
    </>
  )
}