import {FC} from "react";
import React from "react"
import s from './FormControls.module.css'

type TextareaType = {
    input: any
    meta: any
    props: any
    tag: any
    placeholder: string
}

export const Textarea: FC<TextareaType> = ({input, meta, placeholder, ...props}) => {
    return <FormControl props={props} input={input} meta={meta} tag={'textarea'} placeholder={placeholder}></FormControl>
}

export const Input: FC<TextareaType> = ({input, meta, placeholder, ...props}) => {
    return <FormControl props={props} input={input} meta={meta} tag={'input'} placeholder={placeholder}></FormControl>
}

const FormControl: FC<TextareaType> = ({input, meta, tag, placeholder, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.container}>
            {React.createElement(tag, {
                placeholder,
                ...input,
                className: tag === 'textarea' ? `${s.textarea} ${hasError && s.error}` : `${s.inputs} ${hasError && s.error}`
            })}
            {hasError && <span className={s.colorRed}>{meta.error}</span>}
        </div>
    )
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