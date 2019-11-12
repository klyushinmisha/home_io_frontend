import React from 'react';

import './GradientButton.scss';

export default function GradientButton(props) {
    const style = {
        background: `linear-gradient(to right, ${props.col1}, ${props.col2})`
    }

    return <button
            className='btn gradient'
            style={style}
            onClick={props.onClick}>
        {props.children}
    </button>
}