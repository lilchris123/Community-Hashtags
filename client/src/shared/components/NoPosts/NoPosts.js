import React from 'react';
import {Alert} from 'react-bootstrap';
import style from './NoPosts.module.scss';

const NoPosts = (props) => {
    const {text} = props;
    return ( 
        <div className={`${style.content} d-flex justify-content-center align-items-center`}>
              <Alert variant='secondary'>
                <Alert.Heading>{text}</Alert.Heading>
            </Alert>
        </div>
     );
}
 
export default NoPosts;