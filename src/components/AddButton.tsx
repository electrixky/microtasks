import React from 'react';

type AddButtonPropsType = {
    name: string
    callBack: () => void
}


export const AddButton = (props: AddButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};