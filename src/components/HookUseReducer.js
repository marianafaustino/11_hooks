import { useReducer } from "react"

const HookUseReducer = () => {
    // 1- começando com useReducer
    const [number, dispatch]= useReducer((state, action)=>{
        return Math.random(state)
    })

    // 2- avançando no useReducer
  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número!</button>
        <hr />
    </div>
  )
}

export default HookUseReducer