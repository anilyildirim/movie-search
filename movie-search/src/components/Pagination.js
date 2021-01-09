import React from "react";

const Pagination = (props) => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages; i++) {
    let active = props.currentPage == i ? 'active': '';

    pageLinks.push(
      <li className={`list-item ${active}`} key={i} >
        <a href="" onClick={() => props.nextPage(i)}>{i}</a>
      </li>
    )
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {
          pageLinks
        }
      </ul>
    </div>
  )
}

export default Pagination;