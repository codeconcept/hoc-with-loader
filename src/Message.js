import React from "react";

function withLoader(options) {
  return function(Comp) {
    return class WithLoader extends React.Component {
      state = { isLoading: true, textFromAPI: "", error: null };

      componentDidMount() {
        if (this.props.fromAPI) {
          this.getDataFromAPI();
        } else {
          setTimeout(() => {
            this.setState({ isLoading: false });
          }, 2000);
        }
      }

      getDataFromAPI() {
        fetch(options.urlToLoadFrom)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              textFromAPI: data.quote,
              isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              isLoading: false,
              error: error.message,
              textFromAPI: "bon bah :/"
            });
          });
      }

      render() {
        return (
          <div>
            {this.state.isLoading ? (
              <span>{options.loadingText}</span>
            ) : (
              <Comp {...this.props} {...this.state} />
            )}
          </div>
        );
      }
    };
  };
}

class Message extends React.Component {
  render() {
    return (
      <h3>
        {this.props.text.length > 0 ? this.props.text : this.props.textFromAPI}
      </h3>
    );
  }
}

export default withLoader({
  loadingText: "c'est long...",
  urlToLoadFrom: "https://samsquotes.codeconcept.now.sh/"
})(Message);
