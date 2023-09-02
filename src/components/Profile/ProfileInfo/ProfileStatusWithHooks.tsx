import React, {FC} from 'react';
import s from "./ProfileInfo.module.scss";
import {ProfileDataType} from "components/Profile/ProfileContainer";
import {Input, Textarea} from "components/common/FormsConntrols/FormControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "validators/validators";
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from "@mui/material";

type ProfileStatusType = {
    profile: ProfileDataType
    isOwner: boolean
    saveProfileData: (formData: FormInputsType) => void
    personDataFlag: boolean
    personDataFlagToggle: (personDataFlag: boolean) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const activateEditMode = () => {
        props.personDataFlagToggle(true)
    }

    const onSubmit = (formData: FormInputsType) => {
        props.saveProfileData(formData)
    }

    return (
        <div className={s.borderDescriptionBLock}>
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
        <div className={s.formPersonInformation}>
            <div className={s.formPersonFirst}>
                <div>Full name: {props.profile.fullName || "Simon"}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div>About me: {props.profile.aboutMe || "i'm the best"}</div>
                <div>My professional skills: {props.profile.lookingForAJobDescription || "i almost know React"}</div>
            </div>
            <div className={s.formPersonSecond}>
                <div className={s.formPersonContacts}>
                    {Object.keys(props.profile.contacts).map((key, i) => {
                        if (i < 4) {
                            // @ts-ignore
                            return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} key={key}/>
                        }
                    })}
                </div>
                {props.isOwner && <IconButton onClick={props.activateEditMode}
                                              style={{borderRadius: '5px'}}
                                              color={'primary'}>
                    <EditIcon/>
                </IconButton>}
            </div>

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

    return (
        <form className={s.formPersonInformation} onSubmit={props.handleSubmit}>
            <div className={s.formPersonFirst}>
                <div className={s.editContact}>
                    Full name:
                    <div>
                        <Field placeholder={'add your full name'}
                               component={Input}
                               validate={[required]}
                               name={'fullName'}
                               className={s.personInformationInput}/>
                    </div>
                </div>
                <div className={s.editLookForAJob}>
                    <label htmlFor="checkboxId">Looking for a job:</label>
                    <Field type={"checkbox"}
                           id={'checkboxId'}
                           component={'input'}
                           name={'lookingForAJob'}
                    />
                </div>
                <div className={s.editContact}>
                    About me:
                    <div>
                        <Field placeholder={'tell about yourself'}
                               component={Input}
                               validate={[required]}
                               name={'aboutMe'}
                               className={s.personInformationInput}/>
                    </div>
                </div>
                <div>
                    My professional skills: <Field placeholder={'your skills'}
                                                   component={Textarea}
                                                   validate={[required]}
                                                   name={'lookingForAJobDescription'}
                                                   className={s.personInformationInput}/>
                </div>
            </div>
            <div className={s.formPersonSecond}>
                <div>
                    {Object.keys(profile.contacts).map((key, i) => {
                        if (i < 4) {
                            return (
                                <div className={s.editContactRight} key={key}>
                                    {key}:
                                    <div>
                                        <Field placeholder={key}
                                                      component={Input}
                                                      validate={[required]}
                                                      name={'contacts.' + key}
                                                      className={s.personInformationInput}/>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                {error && <div className={s.formError}>{error}</div>}
            </div>
            <button>
                <SaveIcon  style={{boxShadow: '1px 0 5px 0 rgba(0, 0, 0, 0.2)', borderRadius: '5px', cursor: 'pointer'}}
                           color={'primary'}/>
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
    return <div className={s.contact}>{props.contactTitle}: {props.contactValue}</div>
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