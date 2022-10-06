import { Fragment } from "react";
import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  return (
    <Fragment>
      <div>root</div>
      <button onClick={() => push("/about")}>about</button>
    </Fragment>
  );
};

export default Root;
