import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <form action="" onSubmit={ props.handleSubmit }>
          <div className="input-wrapper">
            <input placeholder="Search your movie" type="text" onChange={ props.handleChange }/>
            <button type="submit">Search Movie</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchArea;