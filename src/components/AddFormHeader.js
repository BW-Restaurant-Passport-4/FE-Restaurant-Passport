import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { passportContext } from "../contexts/passportContext";

const AddFormHeader = props => {
  const { setIsEditing, setItemToEdit } = useContext(passportContext);
  return (
    <nav className="addFormHeader">
      <h2>Restaurant Passport</h2>
      <button
        onClick={() => {
          setIsEditing(false);
          setItemToEdit({});
          props.history.push("/dashboard");
        }}
      >
        Home
      </button>
    </nav>
  );
};

export default withRouter(AddFormHeader);
