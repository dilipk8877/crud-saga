import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch} from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUSER} from "../../feature/action/Action";
import { UPDATE_USER } from "../../feature/action/types";

const FormData = ({userID, show, setShow,setUserData,userData,toggleUpdate,setToggleUpdate}) => {

  const handleClose = () =>{
    setShow(false);
    setToggleUpdate(true)
  } 
const dispatch= useDispatch()



  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, id: uuidv4(), [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUSER(userData))
    setShow(false)
    setUserData("")
  };

  const handleUpdate = () => {
    setShow(false)
    dispatch({type:UPDATE_USER,userData,userID})
    setUserData(userData)
  };
  return (
    <div>

      <Modal show={show}>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Phone Number"
                autoFocus
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {toggleUpdate ? (
                <Button variant="primary"
                 onClick={handleSubmit}
                 >
                  Save
                </Button>
              ) : (
                <Button variant="primary"
                 onClick={handleUpdate}
                 >
                  Update 
                </Button>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormData;
