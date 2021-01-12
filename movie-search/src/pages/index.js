import * as React from "react"
import Layout from "../components/Layout"
import SearchField from "../components/SearchField";

export default function Home() {
  
  return (
    <Layout>
      <p> Welcome to most sophisticated and adorable movie search tool of the 21th century! Enjoy it! </p>
      <SearchField/>
    </Layout>
  )
}

