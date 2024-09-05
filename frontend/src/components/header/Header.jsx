import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-around gap-10 m-5">
        <div>
          <NavLink to={"/"}>
            <img
              className="w-40"
              src="src/assets/images/SmartWallet.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <NavLink to={"/register"}>S'Enregistrer</NavLink>
          <NavLink to={"/login"}>Se Connecter</NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
