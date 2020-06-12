import React from 'react';
import style from './LoadingOverlay.module.scss';

const LoadingOverlay = () => {
    return ( 
        <div className={`${style.overlay}`}>
        <div className={`${style['lds-hourglass']}`}/>
    </div>
    );
}
 
export default LoadingOverlay;