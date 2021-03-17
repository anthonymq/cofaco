import React from "react";
import PropTypes from "prop-types";
import JsxParser from 'react-jsx-parser';


import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";
import Icon from "./Icon";
import "./PortfolioDetailDialog.scss";

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  ...restProps
}) => {
  
  let url = '';
  if (typeof window !== 'undefined') {
    url = window.location.href ? window.location.href : '';
  }
  
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="item-intro text-muted">{subheader}</p>
        <p className="item-intro text-muted">{url}</p>
        <Image
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        <iframe title="1" src={`https://docs.google.com/viewerng/viewer?url=${url}${content}&embedded=true`} frameBorder="0" height="100%" width="100%" />
        <JsxParser
          jsx={content}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Close Project
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
};

export default PortfolioDetailDialog;
