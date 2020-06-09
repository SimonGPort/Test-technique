import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { Button, Form, Alert } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.getUsers = this.getUsers.bind(this);
    this.state = {
      firstInput: null,
      secondInput: null,
      firstAnswer: null,
      secondAnswer: null,
    };
  }

  getUsers = async (evt) => {
    evt.preventDefault();

    let response1 = await fetch(
      `https://reqres.in/api/users/${this.state.firstInput}`
    );
    let body1 = await response1.json();
    body1 = body1.data.first_name;

    let response2 = await fetch(
      `https://reqres.in/api/users/${this.state.secondInput}`
    );
    let body2 = await response2.json();
    body2 = body2.data.first_name;

    this.setState({ firstAnswer: body1, secondAnswer: body2 });
  };

  firstInput = (evt) => {
    this.setState({ firstInput: evt.target.value });
  };

  secondInput = (evt) => {
    this.setState({ secondInput: evt.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="Simple page">
          <Form onSubmit={this.getUsers}>
            <Form.Group controlId="formBasicUser1">
              <Form.Label>User # 1</Form.Label>
              <Form.Control
                type="number"
                placeholder="x"
                onChange={this.firstInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicUser2">
              <Form.Label>User # 2</Form.Label>
              <Form.Control
                type="number"
                placeholder="y"
                onChange={this.secondInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button type="submit">Get Users info</Button>
          </Form>

          <Form>
            <Form.Group controlId="formAnswer">
              <Form.Text ref="answer">
                <div>{this.state.firstAnswer}</div>
                <div>{this.state.secondAnswer}</div>
                The user data will be written here.
              </Form.Text>
            </Form.Group>
          </Form>
        </header>
      </div>
    );
  }
}
export default App;
