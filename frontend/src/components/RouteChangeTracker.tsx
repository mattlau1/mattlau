import React from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

import { History } from "history";

interface RouteChangeTrackerProps {
  history: History;
}

const RouteChangeTracker: React.FC<RouteChangeTrackerProps> = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <></>;
};

export default withRouter(RouteChangeTracker);
