import styled from '@emotion/styled';

export const Container = styled.div`
    padding:2vmin;
    background-color:white;
    width:45vmin;
    border-radius: 0.5rem;
    >p{
        font-size: 3vmin;
        text-align: center;
    }
`;

export const ButtonsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:6vmin;
    gap:2vmin;
`;

export const Button = styled.button`
    padding: 0.5vmin 1vmin;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background:${({color}) => color};
    color:white;

`;