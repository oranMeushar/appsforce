import styled from '@emotion/styled';

export const Container = styled.div`
`;

export const FileInput = styled.input`
    display: none;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5vmin;
    button{
        background: none;
        outline:none;
        border:1px solid black;
        padding:0.5vmin 1vmin;
        border-radius: 0.6rem;
        cursor:pointer;
        font-size: 2.3vmin;
        
    }
`;
export const ImageContainer = styled.div`
    border:1px solid black;
    width:25vmin;
    height:25vmin;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;