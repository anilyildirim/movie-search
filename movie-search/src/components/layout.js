import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo-black-bg.jpg";

const ListLink = props => (
  <li>
    <Link to={ props.to }>{ props.children }</Link>
  </li> 
)

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <header>
        <div className="navigation">
          <Link to="/">
            <img src={ logo } alt="page logo"/>
          </Link>
          <nav>
            <ul>
              <ListLink to="/">First Link</ListLink>
              <ListLink to="/">Second One</ListLink>
              <ListLink to="/404/">Not Found</ListLink>
            </ul>
          </nav>
        </div>
      </header>
      <div className="page-content">
        {children}
      </div>
      <footer className="footer">
        <nav aria-label="footer navigation">
          <ul className="footer__inner">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/404/">Not Found</ListLink>
          </ul>
        </nav>
      </footer>
    </div>
  )
}