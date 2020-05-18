import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SelectComponent extends Component{
    constructor(props){
        super(props);
        this.state= {stateValue: null}
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange= (e)=>{
        this.setState({[e]: e.target.value});
    }

    render(){
        const { handleChange }= this;
        const { stateValue }= this.state;
        return(
        <>
            <h1>State: { stateValue }</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" name='stateValue' onChange={e => handleChange('stateValue',e.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>);
    };
}

export default SelectComponent;