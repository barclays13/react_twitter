import React from 'react';
import PostListItem from '../post-list-item';
//import * from './post-list';


const PostList = ({posts, onDelete}) => {
    const elements = posts.filter((elem) => (typeof(elem) === 'object')).map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                {...itemProps} 
                onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;