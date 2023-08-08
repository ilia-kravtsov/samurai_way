import React, {ChangeEvent, FC, useState} from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {createField, Input} from "components/common/FormsConntrols/FormControls";
import {required} from "validators/validators";
import {CaptchaServerType} from "redux/auth_reducer";

type LoginType = {
    isAuth: boolean
    captchaData: CaptchaServerType
    loginTC: (loginData: LoginFormType) => void
}

export const Login = (props: LoginType) => {

    const [textCaptcha, setTextCaptcha] = useState<string>('')

    const onSubmit = (loginData: LoginFormType) => {
        props.loginTC({
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: textCaptcha
        })
    };
    const onCaptchaTextChange = (e: ChangeEvent<HTMLInputElement>) => setTextCaptcha(e.currentTarget.value);

    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {props.captchaData.resultCode === 1
                ? <span className={s.resultCode_1_error}>{props.captchaData.messages[0]}</span>
                : null}
            {props.captchaData.resultCode === 10
                ? <span className={s.resultCode_1_error}>
                    <div className={s.matginTop}>too much attempts for sign in</div>
                    <div className={s.matginTop}>{props.captchaData.fieldsErrors[0].field}</div>
                    <img src={`${props.captchaData.url}`} alt="captcha_url" className={s.captcha}/>
                    <input className={s.login}
                           placeholder={'enter symbols from captcha here'}
                           onChange={onCaptchaTextChange}
                    />
                  </span>
                : null}
        </div>
    );
};

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: FC<InjectedFormProps<LoginFormType & CaptchaServerType>> = ({handleSubmit,error }) => {

    return (
        <form onSubmit={handleSubmit}
              className={s.form}
        >
            <Field placeholder={'email'}
                   component={Input}
                   validate={[required]}
                   name={'email'}
                   className={s.login}
            />
            <Field placeholder={'password'}
                   type={'password'}
                   component={Input}
                   validate={[required]}
                   name={'password'}
                   className={s.login}
            />
            <div className={s.rememberBox}>
                <label htmlFor="checkboxId">remember me</label>
                <Field type={"checkbox"}
                       id={'checkboxId'}
                       component={'input'}
                       name={'rememberMe'}
                       className={s.remember}
                />
            </div>
            <button className={s.loginKey}>Login</button>
            {error && <div className={s.formError}>{error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType & CaptchaServerType>({form: 'login'})(LoginForm)

