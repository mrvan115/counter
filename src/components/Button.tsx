import s from './Button.module.css'

type Props = {
    title: string
    disableValue?: boolean
    callback?: () => void
}

export const Button = (props: Props) => {
git
    const onClickHandler = () => {
        if (props.callback) {
            props.callback()
        }
    }

    return (
        <button className={!props.disableValue ? s.button : s.disable} disabled={props.disableValue}
                onClick={onClickHandler}>{props.title}</button>
    );
};
