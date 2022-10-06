import { Fragment, useContext } from "react";
import { LocContext } from "../context/LocContext";

interface RouteProps {
  path: string;
  component: JSX.Element;
}

const Route = ({ path, component }: RouteProps) => {
  const loc = useContext(LocContext);
  return <Fragment>{loc === path && component}</Fragment>;
};

export default Route;
