import React from 'react';
import './Item.css';
import copy from "copy-text-to-clipboard";



export default function Item({data}) {
  return(
    <div className="feed">
      <div className="item">
        <img src={data.urlToImage} alt=""/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="item-btn">
          <a href={data.url}>Читать источник</a>
        </div>
        <div className="item-btn">
        <a  onClick={() => copy(data.url)}>Copy URL</a>
        </div>
      </div>
    </div>
    
    
  )
}
