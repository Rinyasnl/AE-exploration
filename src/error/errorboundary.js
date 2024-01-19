// Error Boundary Component
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
      };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error caught by error boundary:', error, errorInfo);
      this.setState({ errorInfo });
      // You can log the error to an external service here
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>Component Stack Trace:</p>
            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  