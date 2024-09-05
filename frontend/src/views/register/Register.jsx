import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    const navigate = useNavigate();
    axios
      .post("http://127.0.0.1:8000/api/v1/users/register", user)
      .then((response) => {
        alert(response.data.message);
        navigate("/login");
      });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-green-500">S'Enregistrer</h1>
        <div>
          <form onSubmit={(e) => registerUser(e)} className="flex">
            <div className="flex flex-col">
              <label htmlFor="">
                {" "}
                Nom :
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                />
              </label>
              <label htmlFor="">
                {" "}
                Email :
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                />
              </label>
              <label htmlFor="">
                {" "}
                Mot de passe :
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                />
              </label>
              <label htmlFor="">
                {" "}
                Confirmation Mot de passe :
                <input
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  type="password"
                  name="password_confirmation"
                />
              </label>
            </div>
            <button type="submit">S'enregistrer</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
