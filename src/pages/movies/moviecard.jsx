import React from 'react'

import './styles/movie.css';

const MovieCard = (props) => {
    const {title, image, description, director, producer, releasedate} = props;
  return (
    <React.Fragment>
        <div className='movie-card'>
            <div className='movie-card-conatainer' style={{ display:'flex', flexDirection:"column", alignItems:'center', padding:'10px'}}>
                <div className='movie-card-header'>
                    <h2>{title}</h2>
                    <h4>{director}</h4>
                    <h4>{producer}</h4>
                    <h3>{releasedate}</h3>
                </div>
                <div className='movie-card-body'>
                    <div className='movie-image' style={{display:'flex', justifyContent:'center'}}>
                      <img style={{width:'100%'}} src={image} alt={title}/>
                    </div>
                    <div className='movie-text'>{description}</div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MovieCard;