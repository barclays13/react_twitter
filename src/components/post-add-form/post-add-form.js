import React from 'react';

const PostAddForm = ({onAdd}) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем вы думаете сейчасч?'
                className='form-control new-post-item'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
                onClick={() => onAdd('Hello')}>
            Добавить</button>
        </div>
    )
}
export default PostAddForm;