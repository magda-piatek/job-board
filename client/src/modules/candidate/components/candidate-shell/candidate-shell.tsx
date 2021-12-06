import React, { ReactNode } from "react";
import { Nav } from "react-bootstrap";

type TProps = {
  children: ReactNode;
};

const CandidateShell = ({ children }: TProps) => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
      {children}
    </div>
  );
};

export default CandidateShell;
