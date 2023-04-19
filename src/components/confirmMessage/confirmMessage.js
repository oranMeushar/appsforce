import React from 'react';
import {Container, ButtonsContainer, Button} from './confirmMessage.style';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/services/usersReducer';

const ConfirmMessage = ({id, setIsModal}) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.usersList);

    const handleDeleteButton = () =>{
        const filteredUsers = users.filter(user => user.id.value !== id.value);
        dispatch(setUsers(filteredUsers));
        setIsModal(false);
    }
    
    return (
        <Container>
            <p>Are you sure you want to delete this user?</p>
            <ButtonsContainer>
                <Button color={'#638DC9'} onClick={() =>setIsModal(false)}>Cancel</Button>
                <Button color={'#ff4742'} onClick={handleDeleteButton}>Delete</Button>
            </ButtonsContainer>
        </Container>
    );
};

export default ConfirmMessage;