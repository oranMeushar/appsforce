import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.6rem;
`;
export const ImageContainer = styled.div`
    overflow: hidden;
    height: 100%;
`;
export const Image = styled.img`
    width: clamp(200px, 35vmin, 35vmin);
    height: 40vh;
    object-fit: cover;
    transition: transform 0.3s linear;
    :hover{
        transform: scale(1.1);
    }
`;
export const Footer = styled.div`
    width: 100%;
    font-size: clamp(1.2vmin, 1.5vmin, 2vmin);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2vmin;
    padding: 0.5vmin;
    align-items: center;
    justify-items: center;
    div{
        display: flex;
        gap:0.5vmin;
        align-items: center;
        grid-column: 1/-1;
    }

    img{
        width: 2vmin;
    }
`;
export const Title = styled.div`
    font-size: 3vmin;
    text-align: center;
    font-weight: 600;
`;

export const Button = styled.button`

    padding: 0.5vmin 1vmin;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background:${({color}) => color};
    color:white;

`;
