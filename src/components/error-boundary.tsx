import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// export class ErrorBoundary
// extends React.Component<{children: ReactNode,fallbackRender: FallbackRender}> {

// }

// https://github.com/bvaughn/react-error-boundary
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      fallbackRender({ error });
    }
    return children;
  }
}
