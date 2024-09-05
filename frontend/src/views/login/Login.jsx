import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/v1/users/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert(response.data.message);
        navigate("/");
      });
  };
  return (
    <>
      <div>
        <div>
          <h1>Se connecter</h1>
        </div>
        <form onSubmit={(e) => login(e)}>
          <div>
            <label htmlFor="">
              Email :
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </label>
            <label htmlFor="">
              Password :
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
              />
            </label>
          </div>
          <button type="submit">Se Connecter</button>
        </form>
      </div>
    </>
  );
};
export default Login;
