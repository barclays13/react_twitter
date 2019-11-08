import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggles}) => {
    const elements = posts.filter((elem) => (typeof(elem) === 'object')).map((item) => {
        const {id, ...itemProps} = item;

        return (
            <ListGroupItem key={id} >
                <PostListItem 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleLiked={() => onToggles('like', id)}
                onToggleImportant={() => onToggles('important', id)}/>
            </ListGroupItem>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;