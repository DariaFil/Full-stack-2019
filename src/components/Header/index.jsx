import React from 'react';
import styles from './styles.module.scss';

import logo_img from '../../assets/media/fox-logo.png';

function Header({...props}) {

    return <header className={styles.header}>
        <span className={styles.logo_content}>
            <img src={logo_img} className={styles.logo_img}/>
            FoxCorner
        </span>
        {props.children}
    </header>
}

export default Header;