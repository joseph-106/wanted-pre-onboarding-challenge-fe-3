import { useEffect, useState } from "react";
import { LocContext } from "../context/LocContext";

interface RouterProps {
  children: JSX.Element | JSX.Element[];
}

const Router = ({ children }: RouterProps) => {
  const [loc, setLoc] = useState(location.pathname);
  useEffect(() => (window.onpopstate = () => setLoc(location.pathname)), []);
  return <LocContext.Provider value={loc}>{children}</LocContext.Provider>;
};

export default Router;
