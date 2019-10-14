import React from 'react';
import Content from "../../components/Content";
import Header from "../../components/Header";
import LoginForm from "../../containers/LoginForm";


function AuthPage() {

    return <Content>
        <Header />
        <LoginForm/>
    </Content>
}

export default AuthPage;