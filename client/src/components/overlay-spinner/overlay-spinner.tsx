import React from "react";
import { Spinner } from "react-bootstrap";

import "./overlay-spinner.scss";

export const OverlaySpinner: React.FC = () => {
  return (
    <div className="overlay-spinner">
      <Spinner animation="border" />
    </div>
  );
};
