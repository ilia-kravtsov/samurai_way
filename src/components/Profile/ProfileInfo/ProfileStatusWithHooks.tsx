import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {ProfileDataType} from "components/Profile/ProfileContainer";
import {Input, Textarea} from "components/common/FormsConntrols/FormControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "validators/validators";

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
    profile: ProfileDataType
    isOwner: boolean
    saveProfileData: (formData: FormInputsType) => void
    personDataFlag: boolean
    personDataFlagToggle: (personDataFlag: boolean) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        props.personDataFlagToggle(true)
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deActivateStatus = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const activateStatus = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: FormInputsType) => {
        props.saveProfileData(formData)
    }

    return (
        <div className={s.borderDescriptionBLock}>
            <div className={s.status}>Status:</div>
            {editMode ? <div className={s.statusBlock}>
                    <input value={status}
                           onChange={changeStatus}
                           className={s.editInput}
                           autoFocus
                    />
                    <Button sx={{ml: '10px'}} variant={'contained'} onClick={deActivateStatus}>
                        Save
                    </Button>
                </div>
                : <div className={s.statusBlock}>
                    {props.status || "I haven't added my status yet"}
                    <IconButton onClick={activateStatus}
                                style={{marginLeft: '20px', boxShadow: '1px 0 5px 0 rgba(0, 0, 0, 0.2)'}}
                                color={'primary'}>
                        <EditIcon/>
                    </IconButton>
                </div>
            }
            {props.personDataFlag
                ? <ProfileReduxForm profile={props.profile}
                                    isOwner={props.isOwner}
                                    activateEditMode={activateEditMode}
                                    onSubmit={onSubmit}
                                    initialValues={props.profile}/>
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               activateEditMode={activateEditMode}/>}
        </div>
    );
};

type ProfileDataTypes = {
    profile: ProfileDataType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData = (props: ProfileDataTypes) => {

    return (
        <div className={s.formPersonInfromation}>
            {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
            <div>Full name: {props.profile.fullName || "Simon"}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div>About me: {props.profile.aboutMe || "i'm the best"}</div>
            <div>Contacts: {Object.keys(props.profile.contacts).map(key => {
                // @ts-ignore
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} key={key}/>
            }) || "+7999999999"}</div>
            <div>My professional skills: {props.profile.lookingForAJobDescription || "i almost know React"}</div>
        </div>
    )
}

export type FormInputsType = {
    userId: number
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    skills: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
}

const ProfileDataForm: FC<InjectedFormProps<FormInputsType, ProfileDataTypes> & ProfileDataTypes> = (props) => {

    const {profile, error} = props
    console.log(error)
    return (
        <form className={s.formPersonInfromation} onSubmit={props.handleSubmit}>
            <div>
                Full name: <Field placeholder={'add your full name'}
                                  component={Input}
                                  validate={[required]}
                                  name={'fullName'}
                                  className={s.login}/>
            </div>
            <div>
                <label htmlFor="checkboxId">Looking for a job:</label>
                <Field type={"checkbox"}
                       id={'checkboxId'}
                       component={'input'}
                       name={'lookingForAJob'}
                       className={s.remember}/>
            </div>
            <div>
                About me: <Field placeholder={'tell about yourself'}
                                 component={Input}
                                 validate={[required]}
                                 name={'aboutMe'}
                                 className={s.login}/>
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return (
                    <div className={s.contact} key={key}>
                        {key}: <Field placeholder={key}
                                      component={Input}
                                      validate={[required]}
                                      name={'contacts.' + key}
                                      className={s.login}/>
                    </div>
                )
            }) || "+7999999999"}
            </div>
            <div>
                My professional skills: <Field placeholder={'your skills'}
                                               component={Textarea}
                                               validate={[required]}
                                               name={'lookingForAJobDescription'}
                                               className={s.login}/>
            </div>
            {error && <div className={s.formError}>{error}</div>}
            <button>
                Fix
            </button>
        </form>
    )
}

const ProfileReduxForm = reduxForm<FormInputsType, ProfileDataTypes>({form: 'profileData'})(ProfileDataForm)

type ContactType = {
    contactTitle: string
    contactValue: string
}

const Contact = (props: ContactType) => {
    return <div>{props.contactTitle}: {props.contactValue}</div>
}


// state = {
//     editMode: false,
//     status: this.props.status
// }
//
// activateStatus = () => {
//     this.setState({
//         editMode: true,
//         status: this.props.status
//     })
// }
//
// deActivateStatus = () => {
//     this.setState({
//         editMode: false,
//         status: this.state.status
//     })
//     this.props.updateStatusTC(this.state.status)
// }
//
// changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//         status: e.currentTarget.value
//     })
// }
//
// componentDidUpdate(prevProps:Readonly < ProfileStatusType >, prevState:Readonly<{}>)
// {
//     if (prevProps.status !== this.props.status) {
//         this.setState({
//             status: this.props.status
//         })
//     }
// }