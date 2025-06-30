import {Input} from "./Input/Input.tsx";
import {Button} from "./Button/Button.tsx";
import s from './EnterValue.module.css'

type Props = {
    startValue: number
    maxValue: number
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void
    onSetValue: () => void
}

export const EnterValue = (props: Props) => {
    const START_VALUE = 'start value'
    const MAX_VALUE = 'max value'

    const onChangeStartValueHandler = (startValue: string) => {
        props.onChangeStartValue(+startValue)
    }

    const onChangeMaxValueHandler = (maxValue: string) => {
        props.onChangeMaxValue(+maxValue)
    }

    return (
        <div className={s.enterValue}>
            <div className={s.enterValueInputs}>
                <Input title={START_VALUE} value={props.startValue} callback={onChangeStartValueHandler}/>
                <Input title={MAX_VALUE} value={props.maxValue} callback={onChangeMaxValueHandler}/>
            </div>
            <div className={s.enterValueButton}>
                <Button title={'set'} callback={props.onSetValue}/>
            </div>
        </div>
    );
};
