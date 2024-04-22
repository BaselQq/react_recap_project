import './App.css'
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState<number>(0)

    const randomValues: string[] = [
        "neue",
        "fische",
        "neuefische",
    ]

    function handleRandomValues() {
        const randomIndex = Math.floor(Math.random() * randomValues.length)
        return randomValues[randomIndex];
    }

    function handlePlusCounter() {
        setCounter(counter + 1)
    }

    function handleMinusCounter() {
        setCounter( Math.max(0, counter - 1))
    }

    return (
    <>
        <h1>{(counter % 3 == 0 || counter % 5 == 0) && counter != 0 ? handleRandomValues() : counter}</h1>
        <h2>{counter}</h2>
        <div className={"button-wrapper"}>
            <button onClick={handleMinusCounter}>-</button>
            <button onClick={handlePlusCounter}>+</button>
        </div>
    </>
  )
}

export default App
