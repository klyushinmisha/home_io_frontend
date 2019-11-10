import React from 'react';

import styles from './Image.module.scss';

export default function Image(props) {
    const dynamStyle = {
        maxHeight: props.maxHeight
    };

    return <img
        src={props.src}
        style={dynamStyle}
        alt='There must be some img'
        className={styles['base-image']}/>
}