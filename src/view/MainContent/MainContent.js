/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import './MainContent.css';
import Hashtags from '../Hashtags/Hashtags';
import Categories from '../Categories/Categories';

export default class MainContent extends Component{
    constructor(){
        super();
        this.state={
            topTags: [],
            copiedTag:{
                idx: null
            }
        };
    }

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        axios.get('http://localhost:8081/api/data/topHashtags')
        .then(res => res.data)
        .then(data => this.setState(prevState => ({
            ...prevState,
            topTags: data.tags})))
        .catch(err => console.error("Error Fetching data", err));
        
    }

    // function to list the hash tags
    listHashtags=() => {
        const { topTags } =this.state;
        return topTags.map((h,i)=>{
            return(
                <Hashtags tags={h} index={i} key={i}/>
            );
        });
    }

    render(){
        const { topTags } = this.state;
    return(
        <div className="m-5">
            <h3 className="display-5 d-flex justify-content-center"> Top Community HashTags</h3>
            <div className="container">
                <div className="row tags-container my-3">
                    {console.log(topTags)}
                    {this.listHashtags()}
                </div>
                <Categories/>
            </div>
        </div>
    );
    }
}