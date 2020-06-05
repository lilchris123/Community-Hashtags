/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Badge, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Post.scss";

const Post = (props) => {
  const { post, isCopied, onCopy, onRemove, isEditable } = props;
  const badgeColor = isCopied === false ? "info" : "danger";
  const copyBtnText = isCopied === false ? "copy" : "copied";
  let isReported = false;

  const validationPostSchema = Yup.object({
    description: Yup.string()
      .min(5, "Minimum of 5 characters")
      .max(100, "Max of 100 characters allowed")
      .required("Required"),
    hashtags: Yup.string()
      .min(2, "Minimum of 2 characters")
      .max(1000, "Max of 1000 characters allowed")
      .required("Required")
      .matches(/((#\w+)\s)+/),
  });

  return (
    <>
      {isEditable ? (
        <div className="hashtags-editable-container col m-2">
          <div className="d-flex justify-content-between mt-1">
            <i className="fa fa-user"> {post.createdBy}</i>
            <Badge variant="primary">editable</Badge>
          </div>
          <Formik
            initialValues={{
              description: post.description,
              hashtags: post.hashtags.map((i) => `${i} `),
            }}
            validationSchema={validationPostSchema}
            onSubmit={(values, {setSubmitting}) => {
              // const { description, hashtags } = values;
              // updatePost({ username, password });
              setTimeout(()=>{
                alert(JSON.stringify(values));
              },1000);
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit} className="form">
                <FormGroup controlId={`description${post._id}`}>
                  <FormControl 
                    name={`description${post._id}`} 
                    size="sm" 
                    type="text"
                    isValid={formik.touched.description && !formik.errors.description}
                    isInvalid={formik.touched.description && formik.errors.description}
                    {...formik.getFieldProps('description')} 
                    />
                </FormGroup>

                <FormGroup controlId={`tags${post._id}`}>
                  <FormControl
                    name={`tags${post._id}`}
                    size="sm"
                    type="textarea"
                    isValid={formik.touched.hashtags && !formik.errors.hashtags}
                    isInvalid={formik.touched.hashtags && formik.errors.hashtags}
                    {...formik.getFieldProps('hashtags')}
                  />
                </FormGroup>
                <Button
                size='sm'
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                update
              </Button>
              </Form>
            )}
          </Formik>

          <div className="hashtags-stat-container">
            <i className="fa fa-heart"> {post.likes}</i>
            <div>
              <Badge
                variant={badgeColor}
                className="mr-2"
                onClick={() => onCopy(post._id)}
              >
                {copyBtnText}
              </Badge>
              <Badge 
              variant="danger"
              onClick={() => onRemove(post._id)}
              >remove</Badge>
            </div>
          </div>
        </div>
      ) : (
        <div className="hashtags-container col m-2">
          <i className="fa fa-user"> {post.createdBy}</i>
          <p className="description">{post.description}</p>
          <p className="hashtags">{post.hashtags.map((i) => `${i} `)}</p>
          <div className="hashtags-stat-container">
            <i className="fa fa-heart"> {post.likes}</i>
            <div>
              <Badge
                variant={badgeColor}
                className="mr-2"
                onClick={() => onCopy(post._id)}
              >
                {copyBtnText}
              </Badge>
              <Badge
                variant="danger"
                onClick={() => {
                  isReported = !isReported;
                }}
              >
                {isReported === false ? "report" : "reported"}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func,
  isEditable: PropTypes.bool,
  onRemove: PropTypes.func,
};
Post.defaultProps = {
  onCopy: () => {},
  onRemove: () => {},
  isEditable: false,
};

export default Post;
