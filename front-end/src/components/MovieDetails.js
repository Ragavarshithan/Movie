import React from 'react'

export const MovieDetails = ({movie}) => {
  return (
    <div className='movie-details'>
        <h2>{movie.title}</h2>
        <img src={movie.imageUrl} alt={movie.title}/>
        <p>{movie.overView}</p>
        <p>Release Date: {movie.releaseDate}</p>
    </div>
  )
}
