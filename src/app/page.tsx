'use client'


import { useState } from "react"
import { useEffect } from "react"

export default function Layout(){
  const [timer,setTimer] = useState(0)
  const minutos = Math.floor(timer / 6000)
  const segundos = Math.floor(timer / 100) % 60
  const centesimos = timer %  100

  const [AtivaçãoTimer,setAtivaçãoTimer] = useState(false)

  const textoDoPause = AtivaçãoTimer ? 'Pausar' : 'Iniciar'  
  const tailwindButaoPause = AtivaçãoTimer
  ? 'bg-red-500 text-white border-2 border-white'
  : 'bg-green-500 text-black border-2 border-white'
  const corDoTexto = AtivaçãoTimer
  ? 'text-green-500 text-5xl'
  : 'text-white text-5xl'

  function apertarTecla(event: KeyboardEvent){
    const elemento = event.target as HTMLElement

  
    if (elemento.tagName === 'BUTTON') {
      return
    }

    if(event.repeat){
      return
    }
    else if (event.code === 'Space' || event.code === 'Enter' ){
      event.preventDefault()
      pausarDespausar()
    }
    else if (event.code === 'Backspace'){
      zerarContagem()
    }
  }


  function zerarContagem(){
    setTimer(0)
    setAtivaçãoTimer(false)
  }

function pausarDespausar() {
  setAtivaçãoTimer((valorAtual) => !valorAtual)
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

useEffect(() => {
  window.addEventListener("keyup", apertarTecla)

  return () => {
    window.removeEventListener("keyup", apertarTecla)
  }
}, [])


  return(
    <>
    <div className='text-white border-2 border-white-900'>
      <h1 className="fontes text-3xl">Timer</h1>
  <p className={`${corDoTexto} fontes`}>
   {minutos.toString().padStart(2,'0')} : {segundos.toString().padStart(2,'0')} : {centesimos.toString().padStart(2,'0')}
  </p>
      <button onClick={zerarContagem} className=" bg-gray-700">Zerar</button>
      <button className={tailwindButaoPause}onClick={pausarDespausar}>{textoDoPause}</button>
      <p>Press Space or Enter to Start</p>
      <p>Press BackSpace to reset</p>
      </div>
    </>
  )
}