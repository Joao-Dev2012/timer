'use client'


import { useState } from "react"
import { useEffect } from "react"

export default function Layout(){
  const [contagemSegundos,setContagemSegundos] = useState(0)
  const [contagemMilisegundos,setContagemMilisegundos] = useState(0)
  const [AtivaçãoTimer,setAtivaçãoTimer] = useState(false)
  const [textoDoPause, setTextoDoPause] = useState('Iniciar')
  const [corDoTexto, setCordoTexto] = useState('text-white')
  const [tailwindButaoPause,setTailwindButaoPause] = useState('bg-green-500 text-black')

  function adicionarContagem(){
    setContagemSegundos((ValorAtual)=> ValorAtual + 1 )
  }
  function zerarContagem(){

    setContagemSegundos(0)
    setContagemMilisegundos(0)
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
    setContagemMilisegundos((ValorAtual)=> {
      if (ValorAtual <= 99){
       return ValorAtual + 1
      }
      else{
        adicionarContagem()
       return 0
      }
    })
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
    {contagemSegundos.toString().padStart(2, '0')}:
    {contagemMilisegundos.toString().padStart(2, '0')}
  </p>
      <button onClick={zerarContagem} className="bg-gray-700">Zerar</button>
      <button className={tailwindButaoPause}onClick={pausarDespausar}>{textoDoPause}</button>
    </div>
    </>
  )
}