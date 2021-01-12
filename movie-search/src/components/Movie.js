import React from "react";

const Movie = (props) => {
  return (
    <li className="fetch-data-item" key={ props.id }>
      <article>
        <header>
          <h2>{ props.title }</h2>
        </header>
        <img src={ `http://image.tmdb.org/t/p/w185/${ props.image }` } alt={ props.alt }/>
        <a onClick={() => props.viewMovieInfo(props.movieId) }>View Details</a>
      </article>
    </li>
  )
}

export default Movie;