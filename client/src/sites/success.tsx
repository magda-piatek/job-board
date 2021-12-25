import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { OverlaySpinner } from "../components/overlay-spinner";

import config from "../config";
import { getUser } from "../redux/user/user-slice";

const Success = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
    history.push(config.candidate.path());
  }, [dispatch, history]);

  return <OverlaySpinner />;
};

export default Success;
