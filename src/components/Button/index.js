import React from 'react';
import './style.css';

const Button = (
    { handlerButton,
        title,
        width,
        height,
        color,
        border,
        margin
    }
) => {
    return (
        <>
            <button onClick={handlerButton}
                style={{
                    backgroundColor: color,
                    border,
                    width,
                    height,
                    margin
                }}>{title}</button>
        </>
    );
}
export default Button;