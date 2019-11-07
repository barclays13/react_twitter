import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.filter((elem) => (typeof(elem) === 'object')).map((item) => {
        const {id, ...itemProps} = item;

        return (
            <ListGroupItem key={id} >
                <PostListItem 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleLiked={() => onToggleLiked(id)}
                onToggleImportant={() =>onToggleImportant(id)}/>
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