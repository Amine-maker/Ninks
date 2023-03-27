import React, { useRouteError } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
