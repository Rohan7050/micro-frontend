import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    onParentNavigation(history.location)
    history.listen(onParentNavigation);
  }, [location]);

  return <div ref={ref} />;
};
