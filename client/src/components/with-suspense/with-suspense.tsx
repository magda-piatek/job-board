import React, { Suspense } from "react";

import { OverlaySpinner } from "../overlay-spinner";

type TWithSuspense = <Props>(
  WithSuspenseComponent: React.ComponentType<Props>,
  fallback?: React.ReactNode
) => (props: Props) => React.ReactNode;

const withSuspense: TWithSuspense =
  (WithSuspenseComponent, fallback) => (props) => {
    const fallbackComponent = fallback ?? <OverlaySpinner />;

    return (
      <Suspense fallback={fallbackComponent}>
        <WithSuspenseComponent {...props} />
      </Suspense>
    );
  };

export default withSuspense;
