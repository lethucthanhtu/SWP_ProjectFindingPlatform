import React, { Component } from "react";
import PasswordField from "material-ui-password-field";

class Visibi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <PasswordField
          id="password"
          floatingLabelText="Enter your password"
          value={this.state.password}
          onChange={this.handleChange}
          errorText={
            this.state.password.length > 0 && this.state.password.length < 8
              ? "Your password must be at least 8 characters long."
              : ""
          }
        />
      </div>
    );
  }
}

export default Visibi;