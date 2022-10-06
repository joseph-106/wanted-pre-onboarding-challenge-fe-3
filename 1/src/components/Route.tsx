import { Fragment } from "react";

interface RouteProps {
  path: string;
  component: JSX.Element;
}

const Route = ({ path, component }: RouteProps) => {
  return <Fragment>{location.pathname === path && component}</Fragment>;
};

export default Route;
