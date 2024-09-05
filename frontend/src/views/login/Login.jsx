import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";

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
        navigate("/dashboard");
      });
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-16 gap-10">
        <div>
          <h1>Se connecter</h1>
        </div>
        <form onSubmit={(e) => login(e)}>
          <div className="flex flex-col justify-center items-center gap-10">
            <label htmlFor="">
              Email <br />
              <input
                className="border rounded w-80"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </label>
            <label htmlFor="">
              Password <br />
              <input
                className="border rounded w-80"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
              />
            </label>
            <div className="flex border w-80 justify-center items-center bg-green-500 text-white">
              <button type="submit">Se Connecter</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
