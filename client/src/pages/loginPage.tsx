import React from "react";
import { loginRequest, profileRequest } from "../api/auth.ts";
import { useAuthStore } from "../store/auth.ts";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export default function loginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);

    navigate("/profile");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="example@email.com" />
      <input type="password" placeholder="*******" />
      <button>Login</button>
    </form>
  );
}
