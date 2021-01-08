import React from "react";
import "../../.env";

export default class SearchField extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const searchQuery = "spiderman";
    const API_KEY = "67508805549721088edd3895774656df"; /* process.env.REACT_APP_API */
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${ API_KEY }&query=${ searchQuery }`;
    const response = await fetch(movieUrl);
    const data = await response.json();
    this.setState({ movies: data.results, isLoading: false });
    console.log('this.state :>> ', this.state);
  }

  render() {
    if (this.state.isLoading) {
      return <div>movies are getting loaded...</div>
    }

    if (!this.state.movies) {
      return <div>can't find any movies</div>
    }

    return (
      <ul className="fetch-data-list">
        { this.state.movies.map(movie =>(
          <li className="fetch-data-item" key="this-will-be-changed">
            <article>
              <header>
                <h2>{ movie.original_title }</h2>
              </header>
              <img src={ `http://image.tmdb.org/t/p/w185/${ movie.poster_path }` } alt={ movie.title }/>
              <p>{ movie.overview }</p>
            </article>
          </li>
        )) }
      </ul>
    );
  }
}


/* poster
The base URL will look like: http://image.tmdb.org/t/p/ then you'll need a size let's say w185 then the poster path you got, so this is the final url http://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg 

https://developers.themoviedb.org/3/getting-started/images
*/