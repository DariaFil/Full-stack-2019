import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import AuthPage from "../pages/authPage";
import HomePage from "../pages/HomePage";
import RegistPage from "../pages/RegistPage";


const MainRouter = () => (
    <Switch>
        <Route exact path={MAIN_URL.LOGIN} component={AuthPage}/>
        <Route exact path={MAIN_URL.REGIST} component={RegistPage}/>
        <Route exact path={MAIN_URL.HOME} component={HomePage}/>

        <Redirect to={MAIN_URL.HOME} />
    </Switch>
);


export default MainRouter;