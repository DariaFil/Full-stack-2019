import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MAIN_URL} from "../../constants";

import styles from './styles.module.scss';
import Input from "../../components/Input";
import Button from "../../components/Button";
import {withRouter} from 'react-router-dom';

function LoginForm({history}) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    const clickLogin = () => {
        if (login.length > 0  && password.length > 0) {
            console.log({login, password});
            // requst to login
            history.push("/home/" + login);
        } else {
            setError("Заполни все поля!")
        }
    };


    const clickRemoveData = () => {
        setPassword("");
        setLogin("");
    };

    useEffect(
        () => {
            setError("");
        }, [login, password]
    );


    return <div className={styles.login_form}>
        <h2>Вход</h2>


        <Input label={"Логин"}
               data={login}
               changeData={(e) => setLogin(e.target.value)}/>

        <Input label={"Пароль"}
               data={password}
               type={"password"}
               style={{marginBottom: "20px"}}
               changeData={(e) => setPassword(e.target.value)}/>

        <div className={styles.error_message}>{error}</div>

        <div className={styles.buttons}>
            <Button onClick={clickLogin} style={{marginBottom: "10px"}}>
                Войти
            </Button>
            <NavLink to={MAIN_URL.REGIST} className={styles.link}>Регистрация</NavLink>
        </div>

    </div>;
}


export default withRouter(LoginForm);