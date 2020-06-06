/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import {
  Modal,
  Button,
  Badge,
  Form,
  Col,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
// import style from "./PostModal.module.scss";

const PostModal = (props) => {
  const { isUpdate, post, onUpdate, onCreate } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationPostSchema = Yup.object({
    description: Yup.string()
      .min(5, "Minimum of 5 characters")
      .max(100, "Max of 100 characters allowed")
      .required("Required"),
    hashtags: Yup.string()
      .max(1000, "Max of 1000 characters allowed")
      .required("Required")
      .matches(/#\w+/g, `Must match hashtags pattern: '#cool #nice'`),
    category: Yup.string()
      .required("Required")
  });

  return (
    <>
      {!isUpdate ? (
        <Button variant="primary" onClick={handleShow}>
          Create Post
        </Button>
      ) : (
        <Badge variant="primary" onClick={handleShow}>
          edit
        </Badge>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {!isUpdate ? (
            <Modal.Title>New Post</Modal.Title>
          ) : (
            <Modal.Title>Edit Post</Modal.Title>
          )}
        </Modal.Header>

        <Formik
          initialValues={{
            description: post ? post.description : "",
            hashtags: post ? post.hashtags.map((i) => `${i} `) : "",
            category: post ? post.category : "",
          }}
          validationSchema={validationPostSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (isUpdate)
              onUpdate({
                ...post,
                description: values.description,
                hashtags: values.hashtags.match(/#\w+/g),
                category: values.category
              });
            
            else
              onCreate({
                description: values.description,
                hashtags: values.hashtags.match(/#\w+/g),
                category: values.category
              });
            setSubmitting(false);
            handleClose();
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Modal.Body>
                <FormGroup controlId="description">
                  <FormLabel>Description</FormLabel>
                  <Col sm={8}>
                    <FormControl
                      name="description"
                      type="text"
                      placeholder="description"
                      isValid={
                        formik.touched.description && !formik.errors.description
                      }
                      isInvalid={
                        formik.touched.description && formik.errors.description
                      }
                      {...formik.getFieldProps("description")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.description}
                    </Form.Control.Feedback>
                  </Col>
                </FormGroup>

                <FormGroup controlId="hashtags">
                  <FormLabel>Hashtags</FormLabel>
                  <Col sm={8}>
                    <FormControl
                      name="hashtags"
                      type="text"
                      placeholder="#nice #cool"
                      isValid={
                        formik.touched.hashtags && !formik.errors.hashtags
                      }
                      isInvalid={
                        formik.touched.hashtags && formik.errors.hashtags
                      }
                      {...formik.getFieldProps("hashtags")}
                    />
                    <Form.Control.Feedback>
                      Note: Only valid hashtags will be parsed
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.hashtags}
                    </Form.Control.Feedback>
                  </Col>
                </FormGroup>

                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Col sm={8}>
                  <Form.Control name="category" as="select" size="sm" custom {...formik.getFieldProps("category")}>
                    <option value="fitness">fitness</option>
                    <option value="popular">popular</option>
                  </Form.Control>
                  </Col>
                </Form.Group>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {!isUpdate ? (
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Post
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Update
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

PostModal.propTypes = {
  isUpdate: PropTypes.bool,
  post: PropTypes.shape(),
  onUpdate: PropTypes.func,
  onCreate: PropTypes.func,
};
PostModal.defaultProps = {
  isUpdate: false,
  post: null,
  onUpdate: () => {},
  onCreate: () => {},
};

export default PostModal;
