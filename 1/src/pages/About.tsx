import { Fragment } from "react";
import useRouter from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <Fragment>
      <div>about</div>
      <button onClick={() => push("/")}>go main</button>
    </Fragment>
  );
};

export default About;
