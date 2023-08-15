import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusHook from "./ProfileStatusHook";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.picture}>
            <img src='https://abrakadabra.fun/uploads/posts/2022-01/1643461021_1-abrakadabra-fun-p-krasivii-fon-prirodi-anime-1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>)
}

export default ProfileInfo;