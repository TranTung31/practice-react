import { Modal, Button } from "react-bootstrap";
import { deleteUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModelConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModel } = props;

  const handleDeleteUser = async () => {
    let res = await deleteUser(dataUserDelete.id);

    if (res && +res.statusCode === 204) {
      handleDeleteUserFromModel(dataUserDelete);
      toast.success("Delete a user success!");
      handleClose(); 
    } else {
      toast.danger("Error delete a user!");
      handleClose();
    }
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
