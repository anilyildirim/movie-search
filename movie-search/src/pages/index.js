import * as React from "react"
import Layout from "../components/Layout"
import SearchField from "../components/SearchField";

export default function Home() {
  
  return (
    <Layout>
      <p className="intro-text"> Welcome to most sophisticated movie search tool of the 21th century! Enjoy it! </p>
      <SearchField/>
    </Layout>
  )
}

