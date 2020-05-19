import React, { Component } from 'react';
import './Categories.scss'

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <>
                <h3 className='display-5 d-flex justify-content-center'>Categories</h3>
            </>
         );
    }
}