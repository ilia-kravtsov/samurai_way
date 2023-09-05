import {FC} from "react";
import React from "react"
import s from './FormControls.module.scss'
import {required} from "validators/validators";
import {Field} from "redux-form";

type TextareaType = {
    input: any
    meta: any
    props: any
    tag: any
    placeholder: string
    maxlength: number
}

export const Textarea: FC<TextareaType> = ({input, meta, placeholder, ...props}) => {
    return <FormControl props={props} input={input} meta={meta} tag={'textarea'} placeholder={placeholder} maxlength={40}></FormControl>
}

export const Input: FC<TextareaType> = ({input, meta, placeholder, ...props}) => {
    return <FormControl props={props} input={input} meta={meta} tag={'input'} placeholder={placeholder} maxlength={30}></FormControl>
}

const FormControl: FC<TextareaType> = ({input, meta: {touched, error}, tag, placeholder,maxlength }) => {
    const hasError = touched && error
    return (
        <div className={s.container}>
            {React.createElement(tag, {
                placeholder,
                ...input,
                maxLength: maxlength,
                className: tag === 'textarea' ? `${s.preparePostTextarea} ${hasError && s.error}` : `${s.inputs} ${hasError && s.error}`
            })}
            {hasError && <span className={s.colorRed}>{error}</span>}
        </div>
    )
}

export const createField = (name: string, placeholder: string, type?: {type: string}) => {
    return <Field placeholder={placeholder}
           component={Input}
           validate={[required]}
           name={name}
           type={type}
    />
}
/*

const FormControl: FC<TextareaType> = ({input, meta, children, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.container}>
            {<textarea {...input} {...props} className={`${s.textarea} ${hasError && s.error}`}/>}
{children}
{hasError && <span className={s.colorRed}>{meta.error}</span>}
</div>
)
}

export const Textarea: FC<TextareaType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.container}>
            <textarea {...input} {...props} className={`${s.textarea} ${hasError && s.error}`}/>
            {hasError && <span className={s.colorRed}>{meta.error}</span>}
        </div>
    )
}

export const Input: FC<TextareaType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.loginContainer}>
            <input {...input} {...props} className={`${s.inputs} ${hasError && s.error}`}/>
            {hasError && <span className={s.colorRed}>{meta.error}</span>}
        </div>
    )
}
 */