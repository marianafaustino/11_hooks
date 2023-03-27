// useContext
import { useContext } from "react"
import { someContext } from "../components/HookUseContext"

import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import HookUseRef from "../components/HookUseRef"

const Home = () => {

  const {contextValue} = useContext(someContext)

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>

        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef/>
    </div>
  )
}

export default Home