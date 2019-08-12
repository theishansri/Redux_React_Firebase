import React, { Component } from "react";
import axios from "axios";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
      text: ""
    };
    // this.userId = React.createRef();
  }
  changeHandler = e => {
    console.log("sdd", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.userId.current);
    console.log("nub", this.state.text, this.state.number);
  };
  HandleClick = e => {
    e.preventDefault();
    console.log(this.state.number, this.state.text);
    // const userId = this.userId.current.value;

    // axios
    //   .get(`http://jsonplaceholder.typicode.com/users/${userId}`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.HandleClick}>
          <input
            type="number"
            placeholder="Number"
            name="number"
            onChange={this.changeHandler}
            value={this.state.number}
          />
          <input
            type="text"
            placeholder="name"
            name="text"
            onChange={this.changeHandler}
            value={this.state.text}
          />
          <button className="btn btn-primary btn-small">Click Me</button>
          <span style={{ visibility: "hidden" }}>{"I amd Ishans"}</span>
        </form>
      </div>
    );
  }
}

export default Demo;
