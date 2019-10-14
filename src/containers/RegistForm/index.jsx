import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Content from "../../components/Content";
import PopUp from "../../components/PopUp";
import {MAIN_URL} from "../../constants";

import styles from './styles.module.scss';
import Input from "../../components/Input";
import Button from "../../components/Button";

function RegistForm() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [popUp, setPopUp] = useState(true);

    function clickRegist (){
        if (login.length > 0 && email.length > 0 && password.length > 0) {
            setPopUp(true);
        } else {
            setError("Заполни все поля!")
        }
    }


    const clickRemoveData = () => {
        setPassword("");
        setLogin("");
        setEmail("");
    };

    useEffect(
        () => {
            setError("");
        }, [login, email, password]
    );


    return <div className={styles.login_form}>
        <h2>Регистрация</h2>


        <Input label={"Логин"}
               data={login}
               changeData={(e) => setLogin(e.target.value)}/>

        <Input label={"Email"}
               data={email}
               changeData={(e) => setEmail(e.target.value)}/>

        <Input label={"Пароль"}
               data={password}
               type={"password"}
               style={{marginBottom: "50px"}}
               changeData={(e) => setPassword(e.target.value)}/>

        <div className={styles.buttons}>
            <Button onClick={clickRegist} style={{marginBottom: "10px"}}>
                Регистрация
            </Button>
            <Button type="red" onClick={clickRemoveData}>
                Очистить
            </Button>
        </div>

        <div className={styles.error_message}>{error}</div>
        {popUp && <PopUp onClick={() => setPopUp(false)}>
            Вы успешно зарегестировались!
            <NavLink to={MAIN_URL.LOGIN}>
            <Button>Войти</Button>
            </NavLink>
        </PopUp>}
    </div>;
}


export default RegistForm;