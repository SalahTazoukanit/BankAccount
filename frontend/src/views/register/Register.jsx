import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-green-500">S'Enregistres</h1>
        <div>
          <form>
            <div></div>
            <button></button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
