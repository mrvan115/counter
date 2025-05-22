import {Button} from "./Button.tsx";
import s from './Counter.module.css'

type Props = {
    value: number
    increaseValue: () => void
    resetValue: () => void
    lastValue: number
}

export const Counter = (props: Props) => {

    const transformationValue = (value: number, lastValue: number) => {
        return value === lastValue
    }

    const disableValueForInc = transformationValue(props.value, props.lastValue)
    const disableValueForReset = transformationValue(props.value, 0)

    return (
        <div className={s.counter}>
            <div className={props.value === props.lastValue ? s.error : s.value}>
                {props.value}
            </div>
            <div className={s.buttons}>
                <Button title={'inc'} callback={props.increaseValue} disableValue={disableValueForInc}/>
                <Button title={'reset'} callback={props.resetValue} disableValue={disableValueForReset}/>
            </div>
        </div>
    );
};
