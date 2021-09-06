import React, { useEffect, useRef } from "react";
import Scrollbar from "react-scrollbars-custom";
import { withRouter } from "react-router-dom";
import { History } from "history";

interface ScrollbarWrapperProps {
  children?: React.ReactNode;
  history: History;
}

// scrollbar wrapper which scrolls to top whenever history is updated
const ScrollbarWrapper: React.FC<ScrollbarWrapperProps> = ({ history, children }) => {
  const scrollbarRef = useRef<Scrollbar & HTMLDivElement>(null);

  useEffect(() => {
    const unlisten = history.listen(() => {
      const current = scrollbarRef.current;
      if (!current) return;
      current.scrollToTop();
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <Scrollbar ref={scrollbarRef} style={{ width: "100vw", height: "100vh" }}>
      {children}
    </Scrollbar>
  );
};

export default withRouter(ScrollbarWrapper);
