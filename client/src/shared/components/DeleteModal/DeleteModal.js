/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import {
  Modal,
  Button,
} from "react-bootstrap";
import PropTypes from "prop-types";
import style from "./DeleteModal.module.scss";

const PostModal = (props) => {
  const { post, onRemove} = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove =() =>{
    onRemove(post._id);
    handleClose();
  }
  return (
    <>
      <Button
        size="sm"
        className={`${style["btn-sm"]}`}
        variant="outline-danger"
        onClick={handleShow}
      >
        remove
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to remove this post? </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
            <Button
              variant="danger"
              onClick={()=> handleRemove()}
            >
              Yes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

PostModal.propTypes = {
  post: PropTypes.shape().isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PostModal;
