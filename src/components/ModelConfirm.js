import { Modal, Button } from "react-bootstrap";

const ModelConfirm = (props) => {
  const { show, handleClose, dataUserDelete } = props;

  const handleDeleteUser = () => {

  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete A User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete this user ?
          <br/>
          <b>email = "{dataUserDelete.email}" ?</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelConfirm;
