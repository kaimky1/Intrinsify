import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "./context/AuthProvider";
import { useNavigate } from "react-router-dom"
import "../css/Register.css";
import swal from "sweetalert";
import { UsernameContext } from "../App";


var axios = require("axios").default;

const LOGIN_URL = "/auth";


const Login = () => {
  const {username, setUsername} = useContext(UsernameContext)
  
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      username: user,
      password: pwd,
    };

    axios
      .post(`http://localhost:4004/login`, body)
      .then((res) => {
        console.log(res.data, "resdata")
        const { username } = res.data;
        window.localStorage.setItem("username", username);
        navigate('/search')
        setUsername(true)
        swal("Login successful", "Your journey awaits", "success")

         
      }).catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
