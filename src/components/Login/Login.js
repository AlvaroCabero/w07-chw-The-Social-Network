import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link /*, useNavigate*/ } from "react-router-dom";

const Login = () => {
  const user = useSelector(({ user }) => user);
  const initialData = {
    username: "",
    password: "",
  };

  // const navigate = useNavigate();

  const [userData, setNewUserData] = useState(initialData);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(userData.username !== "" && userData.password !== ""));
  }, [userData]);

  const changeData = (event) => {
    event.preventDefault();
    setNewUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const onSubmit = (evento) => {
    evento.preventDefault();
    user(userData);
    setNewUserData(initialData);
  };

  return (
    <form
      className="form-login row justify-content-center align-items-center"
      onSubmit={onSubmit}
    >
      <div className="container-form col-4">
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            value={userData.username}
            onChange={changeData}
            autoComplete="off"
            type="text"
            className="form-control"
            id="username"
            placeholder="Choose an username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            value={userData.password}
            onChange={changeData}
            autoComplete="off"
            type="password"
            className="form-control"
            id="password"
            placeholder="Choose a password"
          />
        </div>

        <button disabled={isDisabled} type="submit" className="btn btn-info">
          LOGIN
        </button>

        <Link to="/signup">
          <button type="button" className="btn btn-info">
            SIGN UP
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
