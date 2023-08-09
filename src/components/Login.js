import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLoginRedux } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassWord] = useState(false);

  const navigate = useNavigate();

  const isLoading = useSelector(state => state.user.isLoading);
  const account = useSelector(state => state.user.account);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Email and Password is required!");
    }
    dispatch(handleLoginRedux(email, password));
  };

  const handleEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account])

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Log in</div>
        <div className="text">Email or Username ( eve.holt@reqres.in )</div>
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassWord(!isShowPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {isLoading && <i className="fa-solid fa-sync fa-spin"></i>}
          &nbsp;Log in
        </button>
        <div className="back">
          <i className="fa-solid fa-chevron-left"></i>
          <span onClick={() => handleGoBack()} style={{ cursor: "pointer" }}>
            &nbsp;Go back
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
