import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://cs10.pikabu.ru/post_img/big/2018/05/03/10/152536803913230106.jpg' />
        {props.message}
        <div>
            <span>like</span> {props.likes}
        </div>
    </div>
}

export default Post;
