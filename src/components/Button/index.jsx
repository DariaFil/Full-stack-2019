import React from "react";
import styles from './styles.module.scss';

import cn from 'classnames';

function Button({onClick = () => {}, type = "blue", children, ...props}) {

    return <button className={cn(styles.button,
        type === "red" && styles.button_red)}
                   onClick={onClick} {...props}>
        {children}
    </button>;
}


export default Button;