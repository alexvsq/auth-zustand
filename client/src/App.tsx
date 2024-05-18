import LoginPage from "./pages/loginPage.tsx";
import HomePage from "./pages/homePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.tsx";
import RegisterPage from "./pages/registerPage.tsx";
import ProfilePage from "./pages/profilePage.tsx";
import ProtectedRoutes from "./components/protectedRoutes.tsx";
import { useAuthStore } from "./store/auth.ts";

export default function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
