import type {ChangeEvent} from "react";
import s from './Input.module.css'

type Props = {
    title: string
    value: number
    callback: (value: string) => void
}

export const Input = (props: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <span className={s.inputTitle}>{props.title}:</span>
            <input className={s.inputValue} type="number" value={props.value} onChange={onChangeHandler}/>
        </div>
    );
};
