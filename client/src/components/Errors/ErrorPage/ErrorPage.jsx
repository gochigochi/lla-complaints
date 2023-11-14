import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <p>Esta página no se encuentra</p>
    </div>
  );
}

export default ErrorPage