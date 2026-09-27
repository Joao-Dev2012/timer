'use client'


import { useState } from "react"
import { useEffect } from "react"

export default function Layout(){
  const [timer,setTimer] = useState(0)
  const segundos = Math.floor(timer / 100)
  const centesimos = timer %  100

  const [AtivaçãoTimer,setAtivaçãoTimer] = useState(false)
  const [textoDoPause, setTextoDoPause] = useState('Iniciar')
  const [corDoTexto, setCordoTexto] = useState('text-white')
  const [tailwindButaoPause,setTailwindButaoPause] = useState('bg-green-500 text-black')


  function zerarContagem(){

    setTimer(0)
    setTextoDoPause('Iniciar')
    setCordoTexto('text-white')
    setTailwindButaoPause('bg-green-500 text-black')
    setAtivaçãoTimer(false)
  }

  function pausarDespausar(){
    const interruptor = !AtivaçãoTimer
    setAtivaçãoTimer(interruptor)

    if(interruptor === false){
      setTextoDoPause('Iniciar')
      setCordoTexto('text-white')
      setTailwindButaoPause('bg-green-500 text-black')
    }

    else{
      setTextoDoPause('Pausar')
      setCordoTexto('text-green-500')
      setTailwindButaoPause('bg-red-500 text-white')
    }
  }
  //funcao Principal:
  useEffect(() => {

  if (AtivaçãoTimer === false) {
    return
  }

  const intervalo = setInterval(()=> {
    setTimer((ValorAtual)=> ValorAtual + 1
    )
  },10)

  return () => {
    clearInterval(intervalo)
  }

}, [AtivaçãoTimer])


  return(
    <>
    <div className='text-white border-2 border-white-900'>
      <h1>Timer</h1>
  <p className={corDoTexto}>
    {segundos.toString().padStart(2,'0')}:
    {centesimos.toString().padStart(2,'0')}
  </p>
      <button onClick={zerarContagem} className="bg-gray-700">Zerar</button>
      <button className={tailwindButaoPause}onClick={pausarDespausar}>{textoDoPause}</button>
    </div>
    </>
  )
}