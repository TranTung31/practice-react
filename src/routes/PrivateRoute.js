import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const PrivateRoute = (props) => {
  const user = useSelector(state => state.user.account); 

  if (user && !user.auth) {
    return (
      <>
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>You must be logged in to use this function</p>
        </Alert>
      </>
    );
  }

  return <>{props.children}</>;
};

export default PrivateRoute;
