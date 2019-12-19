import React from 'react';
import './css/mainContent.css';
import topTags from './data/topHashtags.json';

export function MainContent(){
    const listTags =topTags['popular-hashtags'].map((h,i)=>{
       return(
            <div key={i} className='tag-container col m-2'>
                <p>{h.map((i)=> `${i} `)}</p>
                <div className='tag-stat-container'>
                    <i className="fa fa-heart"> {100* i}</i>
                </div>
            </div>
       );
    });

    return(
        <div className="m-5">
            <h3 className="display-4"> Top Community HashTags</h3>
            <div className="container">
                <div className="row tags-container my-3">
                    {listTags}
                </div>
            </div>
        </div>
    );
}