import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=10";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log('data :>> ', data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.people.length) {
      return <div>can't find any people</div>
    }

    return (
      <ul className="fetch-data-list">
        { this.state.people.map(person =>(
          <li className="fetch-data-item" key={ person.login.uuid }>
            <div>{ person.name.first }</div>
            <div>{ person.name.last }</div>
            <img src={ person.picture.large } alt="placeholder"/>
          </li>
        )) }
      </ul>
    );
  }
}