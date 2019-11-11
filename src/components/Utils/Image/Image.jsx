import React from 'react';

import './Image.scss';

export default function Image(props) {
    const dynamStyle = {
        maxHeight: props.maxHeight
    };

    return <img
        src={props.src}
        style={dynamStyle}
        alt='There must be some img'
        className={'base-image'}/>
}