import React, {useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { FormContainer, Title, Button, Input, ButtonsContainer } from './userForm.style';
import validator from 'validator';
import { toast } from 'react-toastify';
import ImagePreview from '../imagePreview/imagePreview';

const UserForm = ({id, oldName, oldEmail, isModal, setIsModal, oldCountry, oldCity, oldStreet, isEdit, handleSubmit}) => {

    const [name, setName] = useState({value:'', isError:false});
    const [email, setEmail] = useState({value:'', isError:false});
    const [country, setCountry] = useState({value:'', isError:false});
    const [city, setCity] = useState({value:'', isError:false});
    const [street, setStreet] = useState({value:'', isError:false});
    const [image, setImage] = useState(null);

    const users = useSelector(state => state.users.usersList);
    const nameRef = useRef();
    
    useEffect(() => {
        if(isEdit && isModal){
            setName({value:oldName, isError:false});
            setEmail({value:oldEmail, isError:false});
            setCountry({value:oldCountry, isError:false});
            setCity({value:oldCity, isError:false});
            setStreet({value:oldStreet, isError:false});
        }
        if(!isModal && !isEdit){
            setName({value:'', isError:true});
            setEmail({value:'', isError:true});
            setCountry({value:'', isError:true});
            setCity({value:'', isError:true});
            setStreet({value:'', isError:true});
            setImage(null);
        }
        nameRef.current?.select();
    }, [isModal, isEdit]);


    const validatedForm = () =>{
        const isUserInputValid = !name.isError && !email.isError && !country.isError && !city.isError && !street.isError;
        const isEmailAlreadyInUse = isEdit
        ? users.some(user => user.email === email.value && user.id.value !== id.value)
        : users.some(user => user.email === email.value);

        isEmailAlreadyInUse && toast.error('Email already in use');
        !isUserInputValid && toast.error('Please fill all fields correctly');

        return isUserInputValid && !isEmailAlreadyInUse;
    }

    const handleInputChange = (e, field) =>{
        const value = e.target.value;
        switch(field){
            case 'name':
                setName({value:value, isError:value.length < 3});
                break;
            case 'country':
                setCountry({value:value, isError:!value.length});
                break;
            case 'city':
                setCity({value:value, isError:!value.length});
                break;
            case 'street':
                setStreet({value:value, isError:!value.length});
                break;
            case 'email':
                setEmail({value:value, isError: !value.length || !validator.isEmail(value)});
                break;
            default:
                break;
        }
    }

    return (
        <FormContainer>
            <Title>{isEdit ? 'Edit User Information' : 'Add New User'}</Title>
            <label>
                <p>Full Name</p>
                <Input ref={nameRef} isError={name.isError} value={name.value} onChange={(e) => handleInputChange(e, 'name')}/>
            </label>
            <label>
                <p>Email</p>
                <Input isError={email.isError} value={email.value} onChange={(e) => handleInputChange(e, 'email')}/>
            </label>
            <label>
                <p>Country</p>
                <Input isError={country.isError} value={country.value} onChange={(e) => handleInputChange(e, 'country')}/>
            </label>
            <label>
                <p>City</p>
                <Input isError={city.isError} value={city.value} onChange={(e) => handleInputChange(e, 'city')}/>
            </label>
            <label>
                <p>Street</p>
                <Input isError={street.isError} value={street.value} onChange={(e) => handleInputChange(e, 'street')}/>
            </label>
            {
                !isEdit && <ImagePreview id={id} image={image} setImage={setImage}/>
            }
            <ButtonsContainer>
                <Button onClick={(e)=>handleSubmit(e, validatedForm(), {name, email, country, city, street, image, id})}>Save</Button>
                <Button onClick={()=>setIsModal(false)}>Cancel</Button>
            </ButtonsContainer>
        </FormContainer> 
    );
};

export default UserForm;