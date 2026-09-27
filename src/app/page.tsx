'use client'


import { useState } from "react"
import { useEffect } from "react"

export default function Layout(){
  const [contagemAtual,setContagemAtual] = useState(0)
  const [AtivaçãoTimer,setAtivaçãoTimer] = useState(false)
  const [PostivoNegativo,setPositivoNegativo] = useState(true)
  const [textoDoPause, setTextoDoPause] = useState('Iniciar')
  const [corDoTexto, setCordoTexto] = useState('text-white')


  function zerarContagem(){
    setAtivaçãoTimer(false)
    setPositivoNegativo(true)
    setContagemAtual(0)
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
  //funcoes de auxilio
  function Positivo(){
    setPositivoNegativo(true)
  }
    function Negativo(){
    setPositivoNegativo(false)
  }
  //funcao Principal:
  useEffect(() => {

  if (AtivaçãoTimer === false) {
    return
  }

  const intervalo = setInterval(() => {

    if (PostivoNegativo === true) {
      setContagemAtual(valorAtual => valorAtual + 1)
    } else {
      const contagemReal = contagemAtual -1
      if(contagemReal === -1){
        zerarContagem()
      }
      setContagemAtual(valorAtual => valorAtual - 1)
    }

  }, 1000)

  return () => {
    clearInterval(intervalo)
  }

}, [AtivaçãoTimer, PostivoNegativo])


  return(
    <>
    <div className='text-white border-2 border-white-900'>
      <h1>Timer</h1>
      <p>{contagemAtual}</p>
      <button onClick={zerarContagem} className="bg-gray-700">Zerar</button>
      <button  onClick={pausarDespausar}>{textoDoPause}</button>
    </div>
    </>
  )
}