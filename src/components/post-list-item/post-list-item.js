import React from 'react';
let today = new Date();

const PostListItem = () => {
    return (
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
                Heello World!
            </span>
            <div className='d-flex justify-content-center align-items-center'>

                <button 
                type='button' 
                className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button 
                type='button' 
                className='btn-trash btn-sm'>
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
        </li>
    )
}
export default PostListItem;