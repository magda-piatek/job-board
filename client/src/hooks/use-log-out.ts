import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../api/auth-requests";
import config from "../config";
import { setInitialStateUser } from "../redux/user/user-slice";

export function useLogOut() {
  const dispatch = useDispatch();
  const history = useHistory();

  return async () => {
    await logout();
    dispatch(setInitialStateUser());
    history.push(config.login.path());
  };
}
