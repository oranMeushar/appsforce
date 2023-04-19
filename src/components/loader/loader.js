import React from 'react';
import {LoadingSpinnerContainer} from './loader.style';
import Spinner from 'react-loading';

const LoadingSpinner = ({topPosition, color}) => {
    return (
        <LoadingSpinnerContainer topPosition={topPosition}>
            <Spinner type='spin' color={color} width='48px'/>
        </LoadingSpinnerContainer>
    )
}
export default LoadingSpinner