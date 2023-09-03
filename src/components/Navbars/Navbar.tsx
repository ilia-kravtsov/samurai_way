import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

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
                <NavLink to={'/users'} activeClassName={s.activeLink} className={s.link}>
                    <Diversity3Icon className={s.linkIcon} color={'primary'}/>
                    {'Friends'}
                </NavLink>
                <NavLink to={'/news'} activeClassName={s.activeLink} className={s.link}>
                    <NewspaperIcon className={s.linkIcon} color={'primary'}/>
                    {'News'}
                </NavLink>
                <NavLink to={'/music'} activeClassName={s.activeLink} className={s.link}>
                    <MusicNoteIcon className={s.linkIcon} color={'primary'}/>
                    {'Music'}
                </NavLink>
                <NavLink to={'/settings'} activeClassName={s.activeLink} className={s.link}>
                    <SettingsIcon className={s.linkIcon} color={'primary'}/>
                    {'Settings'}
                </NavLink>
                <NavLink to={'/video'} activeClassName={s.activeLink} className={s.link}>
                    <OndemandVideoIcon className={s.linkIcon} color={'primary'}/>
                    {'Video'}
                </NavLink>
                {/*<NavLink to={'/profile'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/lifecycle.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Profile'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/messages'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/new-message.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Messages'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/users'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/group.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Friends'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/news'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/news.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'News'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/music'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/music-library.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Music'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/settings'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/services.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Settings'}*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/video'} activeClassName={s.activeLink} className={s.link}>*/}
                {/*    <img src={"https://img.icons8.com/fluency/1x/laptop-play-video.png"} alt="navbar logo" className={s.linkLogo}/>*/}
                {/*    {'Video'}*/}
                {/*</NavLink>*/}
            </div>
        </div>
    )
}



