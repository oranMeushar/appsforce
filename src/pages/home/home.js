import React, {useState} from 'react';
import { Container, UsersContainer, AddUserButton } from './home.style';
import { useGetAllUsers } from '../../hooks/useUsersHooks';
import UserCard from '../../components/userCard/userCard';
import Modal from '../../components/modal/modal';
import UserForm from '../../components/userForm/userForm';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUsers } from '../../store/services/usersReducer';
import defaultImg from '../../resources/images/default.jpg';
import ReactPaginate from 'react-paginate';
import Search from '../../components/search/search';
import { useEffect } from 'react';

const Home = () => {

    const {users, isLoading} = useGetAllUsers('https://randomuser.me/api/?results=100');
    const [isModal, setIsModal] = useState(false);
    const [search, setSearch] = useState('');
    const [itemOffset, setItemOffset] = useState(0);
    
    const usersList = useSelector(state => state.users.usersList);
    
    const dispatch = useDispatch();
    
    const ITEMS_PER_PAGE = 20;
    const endOffset = itemOffset + ITEMS_PER_PAGE;

    useEffect(() =>{
        search.length && setItemOffset(0);
    },[search])

    const handleNewUser = (e, validatedForm, body) =>{
        e.preventDefault();
        if(!validatedForm) return; 

        const {name, email, country, city, street, image, id} = body;
        
        const streetParts = street.value.split(' ');
        const streetNumber = streetParts.slice(-1)[0];

        const newUser = {
            name:{
                first: name.value.split(' ')[0] || '',
                last: name.value.split(' ')[1] || ''
            },
            email: email.value,
            location:{
                country: country.value,
                city: city.value,
                street:{
                    name: !isNaN(streetNumber) ? streetParts.slice(0, -1).join(' ') : streetParts.join(' '),
                    number: !isNaN(streetNumber) ? streetNumber : 0
                }
            },
            id:{
                value: uuidv4()
            },
            picture:{
                medium: image ?? defaultImg
            }
        }
        setIsModal(false);
        dispatch(setUsers([...usersList, newUser]));
        toast.success('User added successfully');
    }

    const filteredUsers = usersList.filter(user =>{
        const {name, email, location} = user;
        const fullName = `${name.title} ${name.first} ${name.last}`.toLowerCase();
        const fullLocation = `${location.country} ${location.city} ${location.street.name} ${location.street.number}`.toLowerCase();
        const lowerCaseSearch = search.toLowerCase();
  
        if (fullName.includes(lowerCaseSearch) || fullLocation.includes(lowerCaseSearch) || email.toLowerCase().includes(lowerCaseSearch)){
            return user
        }
    });

    const currentItems = filteredUsers.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

    return (
        <Container>
            <Search search={search} setSearch={setSearch} placeHolder={'Search by name, emai or location'}/>
            <UsersContainer>
            {
                !!currentItems.length && currentItems.map((user, idx) => <UserCard key={idx} {...user}/>)
            }
            </UsersContainer>
            <AddUserButton onClick={()=>setIsModal(true)}>+</AddUserButton>
            <ReactPaginate
                className='pagination'
                pageLinkClassName='page-link'
                previousLinkClassName='prev'
                nextLinkClassName='next'
                nextLabel='>'
                previousLabel='<'
                onPageChange={(e) => setItemOffset(e.selected * ITEMS_PER_PAGE) % users.length}
                pageRangeDisplayed={7}
                pageCount={pageCount}
                breakLabel='...'
                activeClassName='active'
                renderOnZeroPageCount={null}
                forcePage={!search.length && 0}
            />
            <Modal isModal={isModal} setIsModal={setIsModal}>
                {
                    <UserForm isModal={isModal} handleSubmit={handleNewUser} setIsModal={setIsModal}/>
                }
            </Modal>
        </Container>
    );
};

export default Home;