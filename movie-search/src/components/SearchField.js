import React from "react";
import "../../.env";
import SearchArea from "./SearchArea"
import Pagination from "./Pagination"

export default class SearchField extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    searchQuery: '',
    totalResults: 0,
    currentPage: 1
  }

  API_KEY = "67508805549721088edd3895774656df"

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${ this.API_KEY }&query=${ this.state.searchQuery }`;
    fetch(movieUrl)
    .then(data => data.json())
    .then(data => {
      console.log('data :>> ', data);
      this.setState({ movies: data.results, isLoading: false, totalResults: data.total_results });
    })
  }

  nextPage = (pageNumber) => {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${ this.API_KEY }&query=${ this.state.searchQuery }&page=${ pageNumber }`;
    fetch(movieUrl)
    .then(data => data.json())
    .then(data => {
      console.log('movieUrl :>> ', movieUrl);
      console.log('data :>> ', data);
      this.setState({ movies: data.results, isLoading: false, currentPage: pageNumber});
    })
  }

  render() {
   /*  if (this.state.isLoading) {
      return <div>movies are getting loaded...</div>
    }

    if (!this.state.movies) {
      return <div>can't find any movies</div>
    } */

    const numberPages = Math.floor(this.state.totalResults / 20) + 1;

    return (
      <div>
        <SearchArea handleSubmit={this.handleSubmit} handleChange={ this.handleChange }/>
        <ul className="fetch-data-list">
          { this.state.movies && this.state.movies.map(movie =>(
            <li className="fetch-data-item" key={ movie.id }>
              <article>
                <header>
                  <h2>{ movie.original_title }</h2>
                </header>
                <img src={ `http://image.tmdb.org/t/p/w185/${ movie.poster_path }` } alt={ movie.title }/>
                <a href="">View Details</a>
                {/* <p>{ movie.overview }</p> */}
              </article>
            </li>
          )) }
        </ul>
        { this.state.totalResults > 20 ? <Pagination pages={ numberPages } nextPage={ this.nextPage } currentPage={ this.state.currentPage } /> : '' }
      </div>
    );
  }
}


/* poster
The base URL will look like: http://image.tmdb.org/t/p/ then you'll need a size let's say w185 then the poster path you got, so this is the final url http://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg 

https://developers.themoviedb.org/3/getting-started/images
*/