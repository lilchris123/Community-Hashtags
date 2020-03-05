import React, {Component} from 'react';
import '../../css/mainContent.css';
import Hashtags from '../Hashtags/Hashtags';
import Categories from '../Categories/Categories';
//import topTags from './data/topHashtags.json';

export class MainContent extends Component{
    constructor(){
        super();
        this.state={
            tags: {
                popular: []
            },
            copiedTag:{
                idx: null
            }
        };
    }

    //fetch all the hashtags after mounting the component
    componentDidMount(){
        fetch('http://localhost:8081/api/data/topHashtags')
        .then(res=> res.json())
        .then(data => this.setState({tags: data}))
        .catch(err=> console.error("Error Fetching data",err));
        
    }
    //function to list the hash tags
    listHashtags=() => {
        const {popular} =this.state.tags;
        return popular.map((h,i)=>{
            return(
                <Hashtags tags={h} index={i}/>
            );
        });
    }

    render(){
        
    return(
        <div className="m-5">
            <h3 className="display-5 d-flex justify-content-center"> Top Community HashTags</h3>
            <div className="container">
                <div className="row tags-container my-3">
                    {this.listHashtags()}
                </div>
                <Categories/>
            </div>
        </div>
    );
    }
}