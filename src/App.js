import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModelAddNew from "./components/ModelAddNew";
import { useState } from "react";

function App() {
  const [isShowModelAddNew, setShowModelAddNew] = useState(false);
  const handleClose = () => {
    setShowModelAddNew(false);
  }
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span><b>List users: </b></span>
          <button className="btn btn-success btn-hover" onClick={() => setShowModelAddNew(true)}>Add new user</button>
        </div>
        <TableUsers />
      </Container>
      <ModelAddNew 
        show = {isShowModelAddNew}
        handleClose = {handleClose}
      />
    </div>
  );
}

export default App;
