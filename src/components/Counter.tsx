import {Button} from "./Button/Button.tsx";
import s from './Counter.module.css'

type Props = {
    value: number | string
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
}

export const Counter = (props: Props) => {

    const transformationValue = (value: number | string, maxValue: number) => {
        return value === maxValue || value === 'enter values and press ‘set’' || value === 'Incorrect value!'
    }

    const disableValueForInc = transformationValue(props.value, props.maxValue)
    const disableValueForReset = transformationValue(props.value, props.startValue)

    return (
        <div className={s.counter}>
            {props.value === 'Incorrect value!' ? (
                <div className={s.incorrect}>{props.value}</div>
            ) : props.value === 'enter values and press ‘set’' ? (
                <div className={s.pressSet}>{props.value}</div>
            ) : (
                <div className={props.value === props.maxValue ? s.error : s.value}>
                    {props.value}
                </div>
            )}

            <div className={s.buttons}>
                <Button title={'inc'} callback={props.increaseValue} disableValue={disableValueForInc}/>
                <Button title={'reset'} callback={props.resetValue} disableValue={disableValueForReset}/>
            </div>
        </div>
    );
};
