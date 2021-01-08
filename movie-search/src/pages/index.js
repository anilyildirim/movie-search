import * as React from "react"
import Layout from "../components/Layout"
/* import FetchRandomUser from "../components/FetchRandom"; */
import SearchField from "../components/SearchField";
import SearchArea from "../components/SearchArea";

export default function Home() {
  /* constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
    }
  }

  handleSubmit = () => {

  }

  handleChange = () => {

  } */

  return (
    <Layout>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus esse at inventore perferendis molestiae, aut libero ex nobis in nulla explicabo magnam facere, blanditiis, maxime voluptate eaque id quisquam!Saepe architecto cum explicabo in dolorem! Labore, voluptates porro aperiam odio deserunt quisquam a sed, ab asperiores quae quam ea doloribus facilis impedit aliquam cumque fugiat officiis. Facere, optio dolor. </p>
      {/* <FetchRandomUser/>  */}
      <SearchArea/>
      <SearchField/>
    </Layout>
  )
}

