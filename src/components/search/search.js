import React from 'react';
import searchImg from '../../resources/images/search.png';
import { Container, Input, Image } from './search.style';

const Search = ({search, setSearch, placeHolder}) => {
    return (
        <Container>
            <Image src={searchImg}/>
            <Input type={'text'} placeholder={placeHolder}  onChange={(e) => setSearch(e.target.value)} value={search}/>
        </Container>
    );
};

export default Search;