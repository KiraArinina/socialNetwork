import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return <div className={s.item}>
        <img src='https://bogatyr.club/uploads/posts/2021-11/thumbs/1636927590_6-bogatyr-club-p-zheltii-tsvet-fon-6.jpg'/>
        {props.friends}
    </div>
}
export default Friends;