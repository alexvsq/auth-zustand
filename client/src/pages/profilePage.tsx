import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const logout = useAuthStore((state) => state.logOut);
  const navigate = useNavigate();

  return (
    <div>
      <h2>profilePage</h2>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
}
