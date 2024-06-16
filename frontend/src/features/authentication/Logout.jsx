import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <RiLogoutBoxLine className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}
export default Logout;

