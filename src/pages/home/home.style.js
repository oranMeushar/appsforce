import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:2vmin 0;
    gap: 2vmin;

    .pagination{
        display: flex;
        align-items: center;
        font-size: 3vmin;
        list-style-type: none;
        gap:3vmin;

        .page-link{
            border:1px solid black;
            border-radius: 0.6rem;
            width: 5vmin;
            height: 5vmin;
            display: grid;
            place-items: center;
        }

        .active{
            background: lightblue;
            border-radius: 0.6rem;
        }

        .prev,.next,.page-link{
            cursor: pointer;
        }
    }
`;

export const UsersContainer = styled.div`
    width:85%;
    display: grid;
    grid-template-columns:repeat(4, minmax(min-content, 1fr));
    justify-items: center;
    align-items:start;
    gap: 2vmin;

    @media (max-width: 1200px){
        grid-template-columns:repeat(2, minmax(min-content, 1fr));
    }
`;

export const AddUserButton = styled.button`
    position: fixed;
    top: 2vmin;
    right: 2vmin;
    width: 7vmin;
    height: 7vmin;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: #00b894;
    color:white;
    font-size: 3vmin;

`;