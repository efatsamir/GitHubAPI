import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ size }) => {
  return (
      <div className="text-center">
        <Spinner animation="border" role="status" size={size} variant="success">
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      </div>
    
  );
};

export default Loader;
