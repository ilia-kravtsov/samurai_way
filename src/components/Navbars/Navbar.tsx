import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';

export const Navbar = () => {
    return (
        <div className={s.navBarContainer}>
            <div className={s.navLinksContainer}>
                <NavLink to={'/profile'} activeClassName={s.activeLink} className={s.link}>
                    <PersonIcon className={s.linkIcon} color={'primary'}/>
                    {'Profile'}
                </NavLink>
                <NavLink to={'/messages'} activeClassName={s.activeLink} className={s.link}>
                    <EmailIcon className={s.linkIcon} color={'primary'}/>
                    {'Messages'}
                </NavLink>
                <NavLink to={'/photos'} activeClassName={s.activeLink} className={s.link}>
                    <PhotoCameraIcon className={s.linkIcon} color={'primary'}/>
                    {'Photos'}
                </NavLink>
                <NavLink to={'/video'} activeClassName={s.activeLink} className={s.link}>
                    <VideocamIcon className={s.linkIcon} color={'primary'}/>
                    {'Video'}
                </NavLink>
                <NavLink to={'/music'} activeClassName={s.activeLink} className={s.link}>
                    <MusicNoteIcon className={s.linkIcon} color={'primary'}/>
                    {'Music'}
                </NavLink>
                <NavLink to={'/users'} activeClassName={s.activeLink} className={s.link}>
                    <Diversity3Icon className={s.linkIcon} color={'primary'}/>
                    {'Friends'}
                </NavLink>
            </div>
        </div>
    )
}



