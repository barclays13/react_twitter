import React from 'react';

const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем вы думаете сейчасч?'
                className='form-control new-post-item'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
            Добавить</button>
        </form>
    )
}
export default PostAddForm;