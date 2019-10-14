import React from 'react';
import styles from "../../pages/authPage/styles.module.scss";




function Content({children}) {

    return <div className={styles.content}>
        {children}
    </div>;
}


export default Content;