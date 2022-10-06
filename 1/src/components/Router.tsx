import { Fragment, useEffect } from "react";

interface RouterProps {
  children: JSX.Element | JSX.Element[];
}

const Router = ({ children }: RouterProps) => {
  useEffect(() => {
    window.onpopstate = (event) => {
      if (event) location.reload();
    };
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default Router;
