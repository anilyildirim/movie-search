import React from "react";
import "../../.env";
import SearchArea from "./SearchArea";
import Pagination from "./Pagination";
import MovieList from "./MovieList";
import Movie from "./Movie";

export default class SearchField extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    searchQuery: '',
    totalResults: 0,
    currentPage: 1,
    noResults: false,
    currentMovie: null
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
      this.setState({ movies: data.results, isLoading: false, totalResults: data.total_results });

      if ( !data.results.length ) {
        this.setState({ noResults: true });
      } else {
        this.setState({ noResults: false });
      }
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

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    if (this.state.isLoading) { 
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=67508805549721088edd3895774656df&language=en-US&page=1')
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: data.results, isLoading: false });
      })

      return (
        <div>
          <SearchArea handleSubmit={this.handleSubmit} handleChange={ this.handleChange }/>
          { this.state.movies ? <MovieList movie={ this.state.movies } /> : '' }
        </div>
      )
    }

    if ( this.state.noResults ) {
      return (
        <div>
          <SearchArea handleSubmit={this.handleSubmit} handleChange={ this.handleChange }/>
          <strong>There are no results to be displayed. Please use different search queries</strong>
        </div> 
      )
    }

    const numberPages = Math.floor(this.state.totalResults / 20) + 1;

    return (
      <div>
        <SearchArea handleSubmit={this.handleSubmit} handleChange={ this.handleChange }/>
        { this.state.movies ? <MovieList movie={ this.state.movies } /> : '' }
        { this.state.totalResults > 20 ? <Pagination pages={ numberPages } nextPage={ this.nextPage } currentPage={ this.state.currentPage } /> : '' }
      </div>
    );
  }
}


/* poster
The base URL will look like: http://image.tmdb.org/t/p/ then you'll need a size let's say w185 then the poster path you got, so this is the final url http://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg 

https://developers.themoviedb.org/3/getting-started/images
*/