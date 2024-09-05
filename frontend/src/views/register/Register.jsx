import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";

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
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-16 gap-10">
          <h1 className="">S'Enregistrer</h1>
          <form onSubmit={(e) => registerUser(e)} className="flex">
            <div className="flex flex-col justify-center items-center gap-10">
              <label htmlFor="">
                Nom <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                />
              </label>
              <label htmlFor="">
                {" "}
                Email <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                />
              </label>
              <label htmlFor="">
                {" "}
                Mot de passe <br />
                <input
                  className="border rounded w-80 "
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                />
                <br />
                <span className="flex justify-center items-center text-xs">
                  <p>
                    Au moins un caractère special, <br /> une chiffre et une
                    majuscule. Min :8
                  </p>
                </span>
              </label>
              <label htmlFor="">
                {" "}
                Confirmation Mot de passe <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  type="password"
                  name="password_confirmation"
                />
              </label>
              <div className="flex border w-80 justify-center items-center bg-green-500 text-white">
                <button type="submit">S'Enregistrer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
