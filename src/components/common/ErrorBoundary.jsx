import { Component } from "react";

/**
 * Catches render errors in a subtree so one broken section can't blank the
 * whole page. Renders a quiet fallback instead.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="mx-auto my-12 max-w-content px-4 text-center text-secondary">
            <p className="text-lg font-semibold">This section failed to load.</p>
            <p className="mt-1 text-sm text-muted">
              Please refresh the page or try again later.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
