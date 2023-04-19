import { useState, useEffect } from 'react';
import * as api from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUsers } from '../store/services/usersReducer';

export const useGetAllUsers =  (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const users = useSelector(state => state.users.usersList);

    const dispatch = useDispatch();

    useEffect(() =>{
        const fetchData = async() => {
            setIsLoading(true);
            const {result, data} = await api.get(url);
            setIsLoading(false);
            result.ok ? dispatch(setUsers(data.results)) : toast.error('An error occurred while fetching data');
        }
        fetchData();
    },[])
    return {users, isLoading}
}


