import React, {Component} from 'react';


export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        const today = new Date();
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames +=' important';
        }
        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
            <span className='app-list-item-label'
            onClick={onToggleLiked}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                type='button' 
                className='btn-star btn-sm'
                onClick={onToggleImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button 
                type='button' 
                className='btn-trash btn-sm'
                onClick={onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'
                style={{transform:'translateX(0px)'}}></i>
                <div
                className='date-creat-item'
                style={{fontSize: '16px'}}>
                    {today.getDate()}.{today.getMonth()} {today.getHours()}:{today.getMinutes()}
                </div>
            </div>
        </div>
        )
    }
}
