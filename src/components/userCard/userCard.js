import React, {useState} from 'react';
import { Container, ImageContainer, Image, Footer, Title, Button } from './userCard.style';
import locationImg from '../../resources/images/location.png';
import emailImg from '../../resources/images/email.png';
import Modal from '../modal/modal';
import ConfirmMessage from '../confirmMessage/confirmMessage';
import UserForm from '../userForm/userForm';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { setUsers } from '../../store/services/usersReducer';

const UserCard = ({id, name, location, email, picture}) => {
    
    const [isModal, setIsModal] = useState(false);
    const [clickAction, setClickAction] = useState('');

    const users = useSelector(state => state.users.usersList);

    const dispatch = useDispatch();

    const handleButtonClicked = (e, action) =>{
        setClickAction(action);
        setIsModal(true);
    }

    const handleEditUser = (e, validatedForm, body) =>{
        e.preventDefault();
        if(!validatedForm) return; 

        const {name, email, country, city, street, image, id} = body;

        const updatedUsers = _.cloneDeep(users).map(user => {
            if(user.id.value === id.value){

                const streetParts = street.value.split(' ');
                const streetNumber = streetParts.slice(-1)[0];

                user.name.first = name.value.split(' ')[0] || '';
                user.name.last = name.value.split(' ')[1] || '';
                user.email = email.value;
                user.location.country = country.value;
                user.location.city = city.value;
                user.location.street.name = !isNaN(streetNumber) ? streetParts.slice(0, -1).join(' ') : streetParts.join(' ');
                user.location.street.number = !isNaN(streetNumber) ? streetNumber : 0;
            }
            return user;
        });
        setIsModal(false);
        dispatch(setUsers(updatedUsers));
        toast.success('User updated successfully');
    }

    return (
        <>
            <Container>
                <Title>
                    {`${name.title ?? ''} ${name.first} ${name.last}`}
                </Title>
                <ImageContainer>
                    <Image src={picture?.medium}/>
                </ImageContainer>
                <Footer>
                    <div><img src={emailImg}/> {email}</div>
                    <div><img src={locationImg}/> {`${location.country} ${location.city} ${location.street.name} ${location.street.number}`}</div>
                    <Button color={'#638DC9'} onClick={(e)=>handleButtonClicked(e, 'edit')}>Edit</Button>
                    <Button color={'#ff4742'} onClick={(e)=>handleButtonClicked(e, 'remove')}>Remove</Button>
                </Footer>
            </Container>
            <Modal isModal={isModal} setIsModal={setIsModal}>
                {clickAction.length && clickAction === 'edit'
                 ? <UserForm 
                    id={id} 
                    oldName={`${name.first} ${name.last}`} 
                    oldEmail={email} 
                    oldCountry={location.country}
                    oldCity={location.city}
                    oldStreet={`${location.street.name} ${location.street.number}`}
                    isModal={isModal}
                    setIsModal={setIsModal}
                    isEdit
                    handleSubmit={handleEditUser}/> 
                 : <ConfirmMessage id={id} setIsModal={setIsModal}/>
                }
            </Modal>
        </>
    );
};

export default UserCard;

