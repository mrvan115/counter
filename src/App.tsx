import './App.css'
import {Counter} from "./components/Counter.tsx";
import {useEffect, useState} from "react";
import {EnterValue} from "./components/EnterValue.tsx";

function App() {

    const err = 'Incorrect value!'
    const val = 'enter values and press ‘set’'

    // Инициализация с localStorage

    const getNumber = (key: string, defaultValue: number): number => {
        const stored = sessionStorage.getItem(key)
        return stored !== null ? Number(stored) : defaultValue
    }

    const getValue = (): number | string => {
        const stored = sessionStorage.getItem('value')
        return stored !== null ? isNaN(+stored) ? stored : Number(stored) : 0
    }

    const [startValue, setStartValue] = useState<number>(() => getNumber('startValue', 0))
    const [maxValue, setMaxValue] = useState<number>(() => getNumber('maxValue', 5))
    const [value, setValue] = useState<number | string>(() => getValue())

    // Сохраняем в localStorage при изменениях
    useEffect(() => {
        sessionStorage.setItem('startValue', String(startValue))
    }, [startValue]);

    useEffect(() => {
        sessionStorage.setItem('maxValue', String(maxValue))
    }, [maxValue]);

    useEffect(() => {
        sessionStorage.setItem('value', String(value))
    }, [value]);

    const increaseValue = () => {
        if (typeof value === 'number' && value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(startValue)
    }

    const onChangeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setValue(val)
    }

    const onChangeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setValue(val)
    }

    const onSetValue = () => {
        if (startValue >= maxValue || startValue < 0) {
            setValue(err)
        } else {
            setValue(startValue)
        }
    }

    return (
        <div className={'app'}>
            <EnterValue startValue={startValue} maxValue={maxValue} onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue} onSetValue={onSetValue}/>
            <Counter value={value} increaseValue={increaseValue} resetValue={resetValue} maxValue={maxValue}
                     startValue={startValue}/>
        </div>
    )
}

export default App
