import styled from '@emotion/styled';



export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap:2vmin;
    padding: 2vmin;
    background-color: white;
    border-radius: 6px;
    p{
        margin-bottom: 0.5vmin;
        font-size: 2vmin;
    }
`;

export const Input = styled.input`
    outline: none;
    border: ${({isError}) => isError && '1px solid red'};
    width: 80%;
    letter-spacing: 0.2rem;
    padding: 0.5vmin;
    width:35vmin;
    :focus{
        border: ${({isError}) => !isError ? '1px solid #2cb1bc' : '1px solid red'};
    }

`;

export const Title = styled.div`
    font-size: 4vmin;
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.div`
    background-color:#0094B0;
    width:fit-content;
    margin-top: 1vmin;
    padding:0.5vmin 2vmin;
    border-radius: 6px;
    font-size: 3vmin;
    cursor: pointer;
    color:white;
`;