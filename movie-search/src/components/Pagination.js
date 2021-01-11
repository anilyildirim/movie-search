import React from "react";

const Pagination = (props) => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages; i++) {
    let active = props.currentPage == i ? 'active': '';

    pageLinks.push(
      <li className={`list-item ${active}`} key={i} onClick={() => props.nextPage(i)}>
        <a>{i}</a>
      </li>
    )
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        { props.currentPage > 1 ? <li className={`list-item prev-btn`} onClick={() => props.nextPage( props.currentPage - 1)}><a>Prev</a></li> : '' }
        {
          pageLinks
        }
        { props.currentPage < props.pages ? <li className={`list-item prev-btn`} onClick={() => props.nextPage( props.currentPage + 1)}><a>Next</a></li> : '' }
      </ul>
    </div>
  )
}

export default Pagination;