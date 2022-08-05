import React from 'react';
type ButtonPropsType = {
    nickName: string,
    callback:()=>void
}
export const Button:React.FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.nickName}</button>
    );
};
