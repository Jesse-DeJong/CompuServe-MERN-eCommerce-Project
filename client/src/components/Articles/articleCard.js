import React from 'react';
import { Link } from "react-router-dom";


function ArticleCard({
    date,
    author,
    heading,
    synopsis,
    body
}) {
  
  
  const styles = {
    button: {

    },
    card: {
      width: "22rem"
    }
  } 

  
  

    return ( <>
<div className="card mx-2" style={styles.card}>
  <img 
  src="https://picsum.photos/200" 
  className="card-img-top" 
  alt={heading}
  ></img>
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">{synopsis}</p>
    <Link 
    style={styles.button}
    to="/" 
    className="btn btn-primary"
    >Read Article</Link>
  </div>
</div>
        </>
    )
}


export default ArticleCard;