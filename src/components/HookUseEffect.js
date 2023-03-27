import { useEffect, useState } from "react"

const HookUseEffect = () => {
// 1- useEffect, sem dependências
    useEffect(()=>{
        console.log("estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = ()=>{
        setNumber(number + 1)
    }

// 2- array de dependências vazio
    useEffect(()=>{
        console.log("serei executado apenas uma vez!")
    },[])    
// 3- item no array de dependência
    const [anotherNumber, setAnotherNumber]= useState(0)

    useEffect(()=>{
        if(anotherNumber > 0){
            console.log("sou executado apenas quando o anotherNumber muda")
        }
    },[anotherNumber])

// 4- cleanup em useEffect
    useEffect(()=>{
     //   const timer = setTimeout(()=>{
       //     console.log("Hello World!")
       // }, 2000)

        //return ()=> clearTimeout(timer)
    },[anotherNumber])

  return (
    <div>
        <h1>useEffect</h1>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar!</button>

        <p>Outro número: {anotherNumber}</p>
        <button onClick={()=> setAnotherNumber(anotherNumber + 1)}>Mudar outro número</button>
        <hr />
    </div>
  )
}

export default HookUseEffect