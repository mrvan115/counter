import './App.css'
import {Counter} from "./components/Counter.tsx";
import {useState} from "react";

function App() {
    const [value, setValue] = useState<number>(0)
    const lastValue = 5

    const increaseValue = () => {
        if (value !== lastValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(0)
    }


    return (
        <div>
            <Counter value={value} increaseValue={increaseValue} resetValue={resetValue} lastValue={lastValue}/>
        </div>
    )
}

export default App
