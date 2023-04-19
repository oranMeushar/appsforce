import React, {useState, useEffect, useRef} from 'react';
import { Container, FileInput, ImageWrapper, ImageContainer, Image } from './imagePreview.style';

const ImagePreview = ({setImage, image}) => {

    const [fileInput, setFileInput] = useState('');
    const [previewURL, setPreviewURL] = useState('');

    const fileRef = useRef();

    useEffect(() => {
        !image && setPreviewURL('');
    },[image])

    useEffect(() => {
        if(fileInput){
            const fileReader = new FileReader();
            fileReader.onload = () =>{
                setPreviewURL(fileReader.result);
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(fileInput);
        }
        else{
            setPreviewURL('');
        }
    },[fileInput])

    const handleFileChange = (e) => {
        e.target.files ? setFileInput(e.target.files[0]) : setFileInput('');
    }

    return (
        <Container>
            <FileInput ref={fileRef} onChange={handleFileChange} type='file' accept='.jpg,.png,.jpeg' name='image'/>
            <ImageWrapper>
                <ImageContainer>
                    { previewURL && <Image src={previewURL} alt='Preivew'/>}
                </ImageContainer>
                <button type='button' onClick={()=>fileRef.current.click()}>Pick an image</button>
            </ImageWrapper>
        </Container>
    );
};

export default ImagePreview;