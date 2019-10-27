  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Fit = props => (
  <tr>
    <td>{props.fit.username}</td>
    <td>{props.fit.description}</td>
    <td>{props.fit.duration}</td>
    <td>{props.fit.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.fit._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFit(props.fit._id) }}>delete</a>
    </td>
  </tr>
)

export default class FitList extends Component {
  constructor(props) {
    super(props);

    this.deleteFit = this.deleteFit.bind(this)

    this.state = {Fit: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/fit/')
      .then(response => {
        this.setState({ fit: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFit(id) {
    axios.delete('http://localhost:5000/fit/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      fit: this.state.fit.filter(el => el._id !== id)
    })
  }

  fitList() {
    return this.state.fit.map(currentfit => {
      return <Fit fit={currentfit} deleteFit={this.deleteFit} key={currentfit._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged challenges</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.fitList() }
          </tbody>
        </table>
      </div>
    )
  }
}