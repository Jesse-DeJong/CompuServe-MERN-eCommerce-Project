import React from 'react';
import { Link } from "react-router-dom";

function ArticleCard({
    date,
    author,
    heading,
    synopsis,
    body
}) {

    return ( <>
<div className="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">{synopsis}</p>
    <Link to="/" className="btn btn-primary">Read Article</Link>
  </div>
</div>
        </>
    )
}


export default ArticleCard;