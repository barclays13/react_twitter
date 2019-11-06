import React from 'react';
import { Button, Input} from 'reactstrap';
import styled from 'styled-components';

const BottomPanelBlock = styled.div`
    display:flex;
    margin-top: 20px;

    input{
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <BottomPanelBlock >
            <Input
                type='text'
                placeholder='О чем вы думаете сейчас?'
            />
            <Button
                type='submit'
                outline 
                color="secondary"
                onClick={() => onAdd('Hello')}>
            Добавить</Button>
        </BottomPanelBlock>
    )
}
export default PostAddForm;