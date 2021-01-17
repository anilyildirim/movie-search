import React from "react";

const MovieDetails = (props) => {
  console.log('props.currentMovie :>> ', props.currentMovie);
  return(
    <div className="movie-details">
      <button onClick={props.closeMovieInfo}>Back to search results</button>

      <article>
        <div>
          <header>
            <h2>{ props.currentMovie.title }</h2>
          </header>
          <img src={ `http://image.tmdb.org/t/p/w185/${ props.currentMovie.poster_path }` } alt={ props.currentMovie.alt }/>
        </div>
        <div>
          <h3>Overview:</h3>
          <p>{ props.currentMovie.overview }</p>
          <h3>Release Date:</h3>
          <p>
            { props.currentMovie.release_date }
          </p>
        </div>
      </article>
    </div>
  )
}

export default MovieDetails;