import React from "react";

function withLoader(Comp) {
  return class WithLoader extends React.Component {
    state = { isLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <span>...loading</span>
          ) : (
            <Comp {...this.props} />
          )}
        </div>
      );
    }
  };
}

class Message extends React.Component {
  state = {};

  render() {
    return <h2>{this.props.text}</h2>;
  }
}

export default withLoader(Message);
