import { Component } from 'react';
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // componentDidCatch can be added to any Class-based component, and if added, this makes the class component an error boundary
  componentDidCatch(error) {
    console.log(error);
    this.setState({hasError: true});
  }
  
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;