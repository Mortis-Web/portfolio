import { useAuthContext } from "../hooks/AuthContext";
import { GrLogout } from "react-icons/gr";

const LogOut = () => {
  const { handleLogOut, isLoggedIn } = useAuthContext();
  return (
    <button
      type="button"
      style={isLoggedIn ? { display: "flex" } : { display: "none" }}
      className="btn text-2xl shadow-lg justify-center items-center btnPrime fixed right-10 bottom-6  z-100"
      onClick={handleLogOut}
    >
      <GrLogout />
    </button>
  );
};

export default LogOut;
