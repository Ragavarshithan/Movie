import React from 'react'

export const Movie = ({movie,onClick}) => {
  return (
    <div className='movie-item' onClick={()=>onClick(Movie.id)}>
        <img src={movie.imageUrl} alt={movie.title}/>
        <h3>{movie.title}</h3>
    </div>
  )
}
