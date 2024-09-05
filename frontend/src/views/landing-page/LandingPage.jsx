import Header from "../../components/header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center">
          <img
            className="p-20"
            src="src/assets/images/SmartWallet.png"
            alt=""
          />
        </div>
        {/* <h1>Bienvenue dans l'application</h1> */}
      </div>
    </>
  );
};
export default LandingPage;
