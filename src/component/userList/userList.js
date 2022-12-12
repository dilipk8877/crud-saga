import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./UserList.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import FormData from "../modal/Modal";
import {  getUser } from "../../feature/action/Action";
import { useDispatch, useSelector } from "react-redux";
const UserList = () => {
  const [toggleUpdate, setToggleUpdate] = useState(true);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const userList = useSelector((state) => state.userList.user);
  const dispatch = useDispatch();
  const handleShow = () => {
    setShow(true);
  };
  const handleEdit = (user) => {
    console.log(user);
    setToggleUpdate(false);
    // dispatch(editUser(user))
    setShow(true);
    setUserData(userData);
  };

  useEffect(() => {
    dispatch(getUser());
    // dispatch(getRequest())
  }, [dispatch]);
  return (
    <div className="user-conatiner position-relative">
      <Row md={4} className="g-4">
        {userList.map((user) => {
          return (
            <Col key={user.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Card.Text>{user.phone}</Card.Text>
                  <div className="d-flex justify-content-around">
                    <Button variant="secondary" onClick={()=>handleEdit(user)}>Update</Button>
                    <Button variant="secondary">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <AiOutlinePlusCircle
        className="text-ligth position-absolute bottom-0 end-0 me-3 text-light fs-1 mb-3"
        onClick={handleShow}
      />
      <FormData
        setShow={setShow}
        show={show}
        userData={userData}
        setUserData={setUserData}
        setToggleUpdate={setToggleUpdate}
        toggleUpdate={toggleUpdate}
      />
    </div>
  );
};

export default UserList;
