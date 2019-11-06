import React, {Component} from 'react';


export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);    
        this.onLike = this.onLike.bind(this);    
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
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
            onClick={this.onLike}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                type='button' 
                className='btn-star btn-sm'
                onClick={this.onImportant}>
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
