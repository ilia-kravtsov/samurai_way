import React, {FC} from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Input} from "components/common/FormsConntrols/FormControls";
import {required} from "validators/validators";

type LoginType = {
    isAuth: boolean
    getLoginUsersDataTC: (loginData: LoginFormType) => void
}

export const Login = (props: LoginType) => {

    const onSubmit = (loginData: LoginFormType) => {
        props.getLoginUsersDataTC(loginData)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}
              className={s.form}
        >
            <Field placeholder={'email'}
                   component={Input}
                   validate={[required]}
                   name={'email'}
                   className={s.login}
            />
            <Field placeholder={'password'}
                   component={Input}
                   validate={[required]}
                   name={'password'}
                   className={s.login}
            />
            <div className={s.rememberBox}>
                <label htmlFor="checkboxId">Remember me</label>
                <Field type={"checkbox"}
                       id={'checkboxId'}
                       component={'input'}
                       name={'rememberMe'}
                       className={s.remember}
                />
            </div>
            <button className={s.loginKey}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)