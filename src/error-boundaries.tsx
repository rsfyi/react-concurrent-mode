import { Component } from 'react';

export default class ErrorBoundary extends Component<
  { fallback: string },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static defaultProps = {
    fallback: <h2 style={{ color: 'red' }}>Something went wrong</h2>,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('Error Info ', errorInfo, ' Error ', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
