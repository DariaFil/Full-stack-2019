import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MAIN_URL} from "../../constants";

import styles from './styles.module.scss';

import {withRouter} from 'react-router-dom';

function HomePageForm({history}) {

    return <div className={styles.home_page}>
        <h2>Лисий уголок</h2>



        <div className={styles.text}>Добро пожаловать на тестовый сайт "Лисьего уголка". Здесь вы сможете вести ежедневные записи,
        публиковать общие расписания и составлять личный план на неделю.</div>
        <div className={styles.text}>После регистрации вам будут доступны как создание постов и
            расписаний, так и возможность видеть публичные записи других пользователей.</div>
        <table className={styles.table}>
            <tr>
                <td><NavLink to={MAIN_URL.LOGIN} className={styles.link}>Войти</NavLink></td>
                <td><NavLink to={MAIN_URL.REGIST} className={styles.link}>Регистрация</NavLink></td>
            </tr>
        </table>
    </div>;
}


export default withRouter(HomePageForm);